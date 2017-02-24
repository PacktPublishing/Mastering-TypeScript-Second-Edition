/// <reference path="../typings/index.d.ts" />

interface INoteModel {
    initialize();
    author();
    coordinates();
    allowedToEdit(account);
}

class NoteModel extends Backbone.Model implements INoteModel {
    initialize() {
        console.log(`TypeScript NoteModel initialize called.`);
    }
    author() {}
    coordinates() {}
    allowedToEdit(account) {
        return true;
    }
}

class NoteCollection extends Backbone.Collection<NoteModel> {
    model = NoteModel;
    //model: NoteModel;
    //model: { new () : NoteModel }; // ok
}

interface ISimpleModel {
    Name: string;
    Id: number;
}

class SimpleModel extends Backbone.Model implements ISimpleModel {
    get Name() 
        { return this.get('Name'); }
    set Name(value: string) 
        { this.set('Name', value); }
    get Id() 
        { return this.get('Id'); }
    set Id(value: number) 
        { this.set('Id', value); }
}