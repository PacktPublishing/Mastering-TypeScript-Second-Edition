interface IModel {
    displayName: string;
    id: number;
}

class Model implements IModel {
    displayName: string;
    id: number;
    constructor(model : IModel) {
        this.displayName = model.displayName;
        this.id = model.id;
    }
}

let firstModel = new Model({ id: 1, displayName: 'firstModel'});

class View {
    template: string;
    constructor(_template: string) {
        this.template = _template;
    }
    render(model: Model) {
        // combine template and view
    }
}

class Controller {
    model: Model;
    view : View;
    constructor() {
        this.model = new Model({id : 1, displayName : 'firstModel'});
        this.view = new View($('#viewTemplate').html());
    }
render() {
    $('#domElement').html(
        this.view.render(this.model)
    );
}
}