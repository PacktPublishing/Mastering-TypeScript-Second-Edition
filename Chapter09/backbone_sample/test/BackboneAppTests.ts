describe('ItemModel tests', () => {
    let itemModel : ItemModel;
    beforeEach( () => {
        itemModel = new ItemModel(
            {Id : 1, DisplayName : 'testDisplay'}
        );
    });
    it('should assign an Id property', () => {
        expect(itemModel.Id).toBe(1);
    });
    it('should assign a DisplayName property', () => {
        expect(itemModel.DisplayName).toBe('testDisplay');
    });
    it('should set an Id property', () => {
        itemModel.Id = -10;
        expect(itemModel.Id).toBe(-10);
    });
    it('should set a DisplayName property', () => {
        itemModel.DisplayName = 'updatedDisplay';
        expect(itemModel.DisplayName).toBe('updatedDisplay');
    });
    it('should call set on Id property', () => {
        itemModel.set('Id', -10);
        expect(itemModel.get('Id')).toBe(-10);
    });
    it('should call set on a DisplayName property', () => {
        itemModel.set('DisplayName', 'updatedDisplay');
        expect(itemModel.get('DisplayName')).toBe('updatedDisplay');
    });
});

describe('ItemCollectionViewModel tests', () => {
    let itemCollectionViewModel : ItemCollectionViewModel;
    beforeAll( () => {
        itemCollectionViewModel = new ItemCollectionViewModel(
            { Title : 'testTitle',
                SelectedItem : { Id : 0, DisplayName : 'testDisplay'}
            }
        );
    });
it('should assign a Title property', () => {
    expect(itemCollectionViewModel.Title).toBe('testTitle');
});
it('should assign a SelectedItem.Id property', () => {
        expect(itemCollectionViewModel.SelectedItem.Id).toBe(0);
});
it('should assign a SelectedItem.DisplayName property', () => {
        expect(itemCollectionViewModel.SelectedItem.DisplayName)
        .toBe('testDisplay');
});

});

describe('ItemView rendering tests', () => {
    let itemModel : ItemModel;
    beforeEach( () => {
        
        setFixtures(
            `<div id="itemViewElement"></div>
        
            <script type="text/template" id="itemViewTemplate">
                <button id='itemButton'> <%= DisplayName %> </button>
            </script>
        
            <script type="text/template" id="itemCollectionViewTemplate">
            </script>
        `);

        itemModel = new ItemModel({Id : 1, DisplayName : 'testDisplay'});
    });

    // afterEach( () => {
// <li>
//     <button id="itemButton">testDisplay</button> 
// </li>
        

    // });
it('should render a li and button element', () => {
    let itemView = new ItemView({model : itemModel});
    let renderedHtml = itemView.render().el;
    console.log(renderedHtml.outerHTML);
    expect(renderedHtml.outerHTML).toContain('<li>');
    expect(renderedHtml.innerHTML).toContain('<button id="itemButton">');
    expect(renderedHtml.innerHTML).toContain('testDisplay')
});

    it('should trigger onClicked', () => {
        
        let clickSpy = spyOn(ItemView.prototype, 'onClicked');
        // must add spy on prototype before constructing the model.
        let itemView = new ItemView({model : itemModel});
        
        itemView.render();
        itemView.$('#itemButton').trigger("click");

        expect(clickSpy).toHaveBeenCalled();

    });

it('should listen to onClicked in ItemCollectionView', () => {
    let clickSpy = spyOn(ItemCollectionView.prototype, 'handleEvent');
    let itemCollectionView = new ItemCollectionView();

    let itemView = new ItemView({model : itemModel});
    itemView.render();

    itemView.$('#itemButton').trigger("click");

    expect(clickSpy).toHaveBeenCalled();

});
});
