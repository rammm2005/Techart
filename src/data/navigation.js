import { RiHomeOfficeLine, RiBloggerLine, RiContactsLine } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { FaLaptopCode } from "react-icons/fa6";

const navigation = [
    {
        'title': 'Home',
        'icon': <RiHomeOfficeLine />,
        'href': '#id'
    },
    {
        'title': 'About Me',
        'icon': <FcAbout />,
        'href': '#id'

    },
    {
        'title': 'Services',
        'icon': <FaLaptopCode />,
        'href': '#id'

    },
    {
        'title': 'Services',
        'icon': <FaLaptopCode />,
        'href': '#id'

    },
    {
        'title': 'Blog',
        'icon': <RiBloggerLine />,
        'href': '#id'

    },
    {
        'title': 'Contact Me',
        'icon': <RiContactsLine />,
        'href': '#id'

    }
];

export default navigation;