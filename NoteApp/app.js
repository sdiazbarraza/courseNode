console.log("starting app.");
const fs = require("fs");
const notes = require("./notes.js");
const _= require("lodash");
const yargs= require("yargs");
const titleOptions= {
	describe:'Title of note',
	demmand :true,
	alias:'t'
};
const bodyOptions={
	describe:'Body of note',
	demmand :true,
	alias:'b'
};
const argv =yargs
			.command('add','Add a new note',{
				title:titleOptions,
				body:bodyOptionso
			})
			.command('list','List all notes')
			.command('read','Read a note',{
				title:titleOptions,
			})
			.command('remove','Remove a note',{
				title:titleOptions
			})
			.help()
			.argv;
//Original line
var command = argv._[0];
console.log("Command: ", command);
console.log("Yarg: ", argv);
if(command ==="add") {
 var note =notes.addNote(argv.title,argv.body);
 if(note){
 	console.log("Note created");
 	console.log("------------");
 	console.log("--Title: "+ note.title);
 }else{
 	console.log("Note taken");
 }
}else if(command === "list"){
	var allNotes =notes.getAll();
	console.log("Printing "+allNotes.length+ "note(s)");
	allNotes.forEach((note)=>{
		notes.logNote(note);
	});

}else if(command === "read"){
	var note=notes.getNote(argv.title);
	if(note){
		console.log("Note created");
 		console.log("------------");
 		console.log("--Title: "+ note.title);
 		console.log("--Body: "+ note.body);
	}else{
		console.log('Note found');
	}
}else if(command === "remove"){
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);

}else {
	console.log("Command not recognized");
}