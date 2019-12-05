import {getCriminals} from "./criminals/CriminalDataProvider.js"
import CriminalListComponent from "./criminals/CriminalList.js"
import ConvictionsSelect from "./convictions/ConvictionSelect.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"


getConvictions().then(ConvictionsSelect)
getCriminals().then(CriminalListComponent)


// getCriminals().then(
//   () => CriminalListComponent()

// )