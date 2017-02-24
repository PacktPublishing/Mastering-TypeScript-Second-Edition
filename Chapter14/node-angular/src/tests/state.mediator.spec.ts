import { Mediator, 
    IMediatorImpl, 
    StateType, 
    PanelType, 
    MainPanelOnly, 
    MainPanelWithSideNav,
    LoginPanel 
} from '../app/state.mediator';

class MockMediatorImpl implements IMediatorImpl {
    showNavPanel() {}
    hideNavPanel() {}
    showDetailPanel() {}
    hideDetailPanel() { }
    showLoginPanel() {};
    hideLoginPanel() {};
    changeShowHideSideButton(fromClass: string, toClass: string) {};
}

describe('src/tests/state.mediator.spec.ts', () => {
    let mockMediatorImpl : IMediatorImpl;

    beforeEach(() => {
        mockMediatorImpl = new MockMediatorImpl();
    });
    it('should set initial state', () => {
        let mediator = new Mediator(mockMediatorImpl);
        expect(mediator.getCurrentMainPanelState())
            .toBe(StateType.MainPanelWithSideNav);
    });

    it('should call hideNavPanel', () => {
        let spy = spyOn(mockMediatorImpl, 'hideNavPanel');
        let mediator = new Mediator(mockMediatorImpl);

        mediator.moveToState(StateType.MainPanelOnly);
        expect(spy).toHaveBeenCalled();
    });

    it('should store current MainPanelState with SideNav hidden', () => {
        let mediator = new Mediator(mockMediatorImpl);
        mediator.moveToState(StateType.MainPanelOnly);

        expect(mediator.getCurrentMainPanelState())
            .toBe(StateType.MainPanelOnly);
    });

    it('should create LoginPanel state object with correct parameters', () => {
        let loginState = new LoginPanel();
        expect(loginState.getPanelType()).toBe(PanelType.OverlayPanel);
        expect(loginState.getStateType()).toBe(StateType.LoginPanel);
        expect(loginState.isLoginVisible()).toBe(true);
    });

it('should call showLoginPanel', () => {
    let spy = spyOn(mockMediatorImpl, 'showLoginPanel');
    let mediator = new Mediator(mockMediatorImpl);

    mediator.moveToState(StateType.LoginPanel);

    expect(spy).toHaveBeenCalled();
});


});

