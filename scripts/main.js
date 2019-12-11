
import {getCriminals} from "./criminals/CriminalDataProvider.js"
import CriminalListComponent from "./criminals/CriminalList.js"
import ConvictionsSelect from "./convictions/ConvictionSelect.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import NoteFormComponent from "./notes/noteForm.js"
import {NoteEventComponent} from "./notes/note.js"
import  {NoteListComponent}  from "./notes/noteList.js"
import { getNotes } from "./notes/noteDataProvider.js"
// import {handleCloseDialog} from "./notes/noteList.js"




getConvictions().then(ConvictionsSelect)
getCriminals().then(CriminalListComponent)
NoteFormComponent()
NoteEventComponent()
getNotes().then(NoteListComponent)
// handleCloseDialog()




// getCriminals().then(
//   () => CriminalListComponent()

// )