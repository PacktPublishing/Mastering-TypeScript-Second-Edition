
interface IClickableItem {
    DisplayName: string;
    Id: number;
}

let ClickableItemCollection : IClickableItem[] = ( [
    { Id: 1, DisplayName : "firstItem"},
    { Id: 2, DisplayName : "secondItem"},
    { Id: 3, DisplayName : "thirdItem"},
]);


class ItemModel extends Backbone.Model implements IClickableItem {
    get DisplayName(): string 
        { return this.get('DisplayName'); }
    set DisplayName(value: string) 
        { this.set('DisplayName', value); }
    get Id(): number { return this.get('Id'); }
    set Id(value: number) { this.set('Id', value); }
    constructor(input: IClickableItem) {
        super();
        for (let key in input) {
            if (key) { this[key] = input[key]; }
        }
    }
}

let itemModelInstance = new ItemModel({Id: 1, DisplayName : 'test'});

class ItemCollection 
    extends Backbone.Collection<ItemModel> {
    model = ItemModel;
}

let itemCollection = new ItemCollection(ClickableItemCollection);

class ItemView extends Backbone.View<ItemModel> {
    template: (json, options?) => string;
    constructor(
        options = < Backbone.ViewOptions<ItemModel> > {} 
        ) {
        options.tagName = "li";
        options.events = <any>{'click': 'onClicked' };
        
        super(options);
        this.template = _.template(
            $('#itemViewTemplate').html() 
        );
    }
    render() {
        this.$el.html(
            this.template(
                this.model.toJSON()
            )
        );
        return this;
    }
    onClicked() {
        alert(`Item clicked : { Id: ${this.model.get('Id')}, 
            DisplayName : ${this.model.get('DisplayName')} }`);
    }
}

class ItemCollectionView extends Backbone.View<ItemModel> {
    template: (json, options?) => string;
    constructor(options?: any) {
        if (!options)
            options = {};
        super(options);
        this.template = _.template(
            $('#itemCollectionViewTemplate').html() 
        );
    }
    render() {
        this.$el.html(this.template(
            this.model.toJSON()));
        this.collection.each( (item) => {
            var itemView = new ItemView( 
                { model : item});
            this.$el.find('#ulRegions')
                .append(itemView.render().el);
        });
        return this;
    }
}

class ScreenViewApp {
    constructor() {
        console.log(`ScreenViewApp.constructor()`);
    }
    start() {
        let collectionModel = new ItemModel(
            {Id: 0, DisplayName: "Select an Option:"});
        let itemCollection = 
            new ItemCollection(ClickableItemCollection);
        let itemCollectionView = new ItemCollectionView(
        {   
            model: collectionModel, 
            collection: itemCollection
        });
        $('#pageLayoutRegion').html(
            itemCollectionView.render().el
        );
    }
}

