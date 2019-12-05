import {getCriminals} from "./criminals/CriminalDataProvider.js"
import CriminalListComponent from "./criminals/CriminalList.js"


getCriminals().then(CriminalListComponent)


// getCriminals().then(
//   () => CriminalListComponent()

// )