
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
        for (var key in input) {
            if (key) { this[key] = input[key]; }
        }
    }
}

interface IItemCollectionViewModel {
    Title: string;
    SelectedItem : IClickableItem;
}

class ItemCollectionViewModel extends Backbone.Model
    implements IItemCollectionViewModel
{
    get Title(): string 
        { return this.get('Title'); }
    set Title(value: string) 
        { this.set('Title', value); }
    get SelectedItem(): IClickableItem 
        { return this.get('SelectedItem'); }
    set SelectedItem(value: IClickableItem) 
        { this.set('SelectedItem', value); }
    constructor(input: IItemCollectionViewModel) {
        super();
        for (var key in input) {
            if (key) { this[key] = input[key]; }
        }
    }
}

//let itemModelInstance = new ItemModel({Id: 1, DisplayName : 'test'});

class ItemCollection 
    extends Backbone.Collection<ItemModel> {
    model = ItemModel;
}

class EventBus {
    static Bus = _.extend({}, Backbone.Events);
}


class ItemView extends Backbone.View<ItemModel> {
    template: (json, options?) => string;
    constructor(options?: Backbone.ViewOptions<ItemModel>) {
        if (!options) 
            options = {};
        options.tagName = "li";
        options.events = <any>{'click': 'onClicked' };
        
        super(options);
        this.template = _.template(
            $('#itemViewTemplate').html() 
        );
        _.bindAll(this, 'onClicked');
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
    EventBus.Bus.trigger("item_clicked", this.model);  
}
}

class ItemCollectionView extends 
    Backbone.View<ItemCollectionViewModel> {
    template: (json, options?) => string;
    constructor(options?: any) {
        if (!options)
            options = {};
        super(options);
        this.template = _.template(
            $('#itemCollectionViewTemplate').html() 
        );
        this.listenTo(EventBus.Bus, 
            "item_clicked", this.handleEvent);
    }
    render() {
        this.$el.html(this.template(
            this.model.toJSON()));
        this.collection.each( (item) => {
            var itemView = new ItemView( 
               <any> { model : item});
            this.$el.find('#ulRegions')
                .append(itemView.render().el);
        });
        return this;
    }
handleEvent(e) {
    this.model.SelectedItem = new ItemModel(e);
    this.render();
}
}

class ScreenViewApp {
    constructor() {
        console.log(`ScreenViewApp.constructor()`);
    }
    start() {
let collectionModel = new ItemCollectionViewModel( {
    Title: 
        'Select an Option:',
    SelectedItem : 
        {Id: 0, DisplayName: "none"}});
        
let itemCollection = 
    new ItemCollection(ClickableItemCollection);
let itemCollectionView = new ItemCollectionView(
{   
    model: collectionModel, 
    collection: itemCollection
});
        $('#pageLayoutRegion').html(itemCollectionView.render().el);
    }
}

