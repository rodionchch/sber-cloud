import { ReactComponent as Ubuntu } from "assets/images/ubuntu.svg";
import { ReactComponent as Debian } from "assets/images/debian.svg";
import { ReactComponent as ArchLinux } from "assets/images/arch.svg";
import { ReactComponent as WindowsServer } from "assets/images/windows.svg";

const getServerLogo = (logo: string) => {
  switch (logo) {
    case "Ubuntu":
      return <Ubuntu />;
    case "Debian":
      return <Debian />;
    case "Arch Linux":
      return <ArchLinux />;
    case "Windows Server":
      return <WindowsServer />;
  }
};

export default getServerLogo;
