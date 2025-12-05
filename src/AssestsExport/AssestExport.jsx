import DarkModeIcon from '../Assest/DarkModeIcon.png'
import BrightModeIcon from '../Assest/BrightModeIcon.png'
const AssestsExport = (iconName) => {
      switch (iconName) {
        case 'BrightModeIcon':
            return BrightModeIcon
        case 'DarkModeIcon':
            return DarkModeIcon
        }
}

export default AssestsExport