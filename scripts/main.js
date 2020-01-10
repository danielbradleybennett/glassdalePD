
import {getCriminals} from "./criminals/CriminalDataProvider.js"
import CriminalListComponent from "./criminals/CriminalList.js"
import ConvictionsSelect from "./convictions/ConvictionSelect.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import {NoteFormComponent} from "./notes/NoteFormComponent.js"
import  {NoteListComponent}  from "./notes/NoteListComponent.js"
import { getNotes } from "./notes/noteDataProvider.js"
import { DialogComponent } from "./criminals/alibiDialog.js"
import { WitnessListComponent} from "./witness/witnessList.js"
import { getWitness } from "./witness/witnessDataProvider.js"






getWitness()
getConvictions().then(ConvictionsSelect)
getCriminals().then(CriminalListComponent)
getNotes()
.then(NoteFormComponent)
.then(NoteListComponent)
DialogComponent()
WitnessListComponent()








// getCriminals().then(
//   () => CriminalListComponent()

// )