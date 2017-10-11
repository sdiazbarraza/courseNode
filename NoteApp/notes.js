console.log("starting notes");

const fs =require('fs');

var fetchNote =() =>{
	try {
		var notesString = fs.readFileSync('notes-data.json');
		 return JSON.parse(notesString);
	}catch(e){
		return [];
	}

};
var saveNotes =(notes)=>{
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};
var addNote =(title,body) =>{
	var notes = fetchNote();
	var note ={
		title,
		body
	};
	var duplicateNotes =notes.filter((note)=>note.title===title);
	if(duplicateNotes.length===0){
		notes.push(note);
		saveNotes(notes);
		return note;
	};
};
var logNote=(note)=>{
	debugger;
	console.log("--");
	console.log("Title: "+note.title);
	console.log("Body: "+note.body);
} ;
var getAll = () =>{
	return fetchNote();
};
var getNote=(title)=>{
	var notes = fetchNote();
	var filteredNotes=notes.filter((note)=>note.title===title);
	return filteredNotes[0];
};
var removeNote = (title)=>{
	//fetch Notes
	var notes = fetchNote();
	//filter notes , removing the one with title of argument
	var filteredNotes = notes.filter((note)=> note.title !== title);
	saveNotes(filteredNotes);

	return notes.length!==filteredNotes.length;
	// save new notes array 
}
module.exports = {
	addNote, 
	getAll,
	getNote,
	removeNote 
}; 