import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { useAuth } from "hooks/useAuth";
import { getData } from "utils/getData";

import { UpdateStatus } from "./Update.types";

const useUpdate = () => {
  const { id } = useParams();
  const auth = useAuth();
  const [checked, setChecked] = useState<number[]>([]);
  const [planed, setPlaned] = useState<{ [key: string]: Date | null }>({});

  const status = useRef<{
    [key: string]: string | ReturnType<typeof setTimeout>;
  }>({});

  const server = useMemo(() => {
    return getData(auth?.user)?.servers?.find(
      (server) => server.id === Number(id)
    );
  }, [auth?.user, id]);

  useEffect(() => {
    setChecked([]);
    if (server?.updates) {
      const statusObj: { [key: string]: string } = {};
      server?.updates.forEach((up) => {
        statusObj[up.id] = UpdateStatus.UPDATE;
      });
      status.current = statusObj;
    }
  }, [server?.updates]);

  const onCheck = (value: number) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const onPlay = () => {
    checked?.forEach((id) => {
      status.current[id] = setTimeout(() => {
        Object.keys(status.current).forEach((key) => {
          if (typeof status.current[key] === "number") {
            status.current[key] = UpdateStatus.DONE;
          }
        });
        setChecked([]);
      }, 6000);
    });
    setChecked([]);
    setPlaned({});
  };

  const onPlayAll = () => {
    server?.updates?.forEach(({ id }) => {
      status.current[id] = setTimeout(() => {
        Object.keys(status.current).forEach((key) => {
          if (typeof status.current[key] === "number") {
            status.current[key] = UpdateStatus.DONE;
          }
        });
        setChecked([]);
      }, 10000);
    });
    setChecked([]);
    setPlaned({});
  };

  const onPause = () => {
    checked?.forEach((id) => {
      clearTimeout(status.current[id]);
      status.current[id] = UpdateStatus.PAUSE;
    });

    setChecked([]);
  };

  const onPlanned = (date: Date | null) => {
    if (date) {
      const plannedObj: { [key: string]: Date | null } = { ...planed };
      checked.forEach((id) => {
        plannedObj[id] = date;
      });
      setChecked([]);
      setPlaned(plannedObj);
    }
  };

  const onCancelPlan = (id: number) => {
    setPlaned({ ...planed, [id]: null });
  };

  const getDone = () => {
    if (status?.current) {
      return Object.keys(status?.current)?.every(
        (key) => status?.current?.[key] === UpdateStatus.DONE
      );
    }
    return false;
  };
  return {
    server,
    getDone,
    checked,
    onPause,
    onPlay,
    onCheck,
    status,
    onPlayAll,
    planed,
    onPlanned,
    onCancelPlan,
  };
};

export default useUpdate;
