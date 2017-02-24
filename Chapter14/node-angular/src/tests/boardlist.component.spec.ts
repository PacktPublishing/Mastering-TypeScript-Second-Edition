import { DebugElement } from '@angular/core';
import { async, 
    ComponentFixture, 
    TestBed, 
    inject } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { Http, 
    BaseRequestOptions, 
    Response, 
    Headers, 
    RequestOptions, 
    ResponseOptions } from '@angular/http';

import 'rxjs/add/operator/map';
    
import { MockBackend, MockConnection } from '@angular/http/testing';

import { BoardListComponent } from '../app/boardlist.component';
import { 
    IBoardSizeItem, 
    IBoardType,
    IBoardListItem,
    IManufacturer
    } from '../app/IBoardList';

describe('app/tests/boardlist.component.spec.ts', () => {

    beforeEach( async(() => {
        TestBed.configureTestingModule( 
            {
                declarations : [ BoardListComponent ],
                providers : [
                    MockBackend,
                    BaseRequestOptions,
                    {
                        provide: Http,
                        useFactory: (
                            instance: MockBackend,
                            options: BaseRequestOptions
                        ) => {
                            return new Http(
                                instance, 
                                options
                            );
                        },
                deps: [
                    MockBackend, 
                    BaseRequestOptions
                ]
                    }
                ]
            }
        )
        .compileComponents();
    }));

    it('should connect to a mock http provider', 
        async( 
            inject ( 
                [MockBackend], 
                (mockBackend : MockBackend) => {
                    // configure response
                    mockBackend.connections.subscribe( (conn : any)  => 
                        {
                            conn.mockRespond(new Response(new ResponseOptions(
                                { body: JSON.stringify(
                                        [ ]
                                    )}
                            )));
                        }
                    ); // end of subscribe function

                    let fixture = TestBed.createComponent(BoardListComponent);
                    let boardListInstance = fixture.componentInstance;
                    expect(boardListInstance.manufacturerList).toBeDefined();

                    } // end of test block
                ) // end of inject function
            ) // end of async function 
    ); // end of it function

    it('should process a valid JSON response', 
        async( 
            inject ( 
                [MockBackend], 
                (mockBackend : MockBackend) => {
                    // configure response
                    mockBackend.connections.subscribe( (conn : any)  => 
                        {
                            conn.mockRespond(new Response(new ResponseOptions(
                    { body: JSON.stringify(
                            [ 
                                {
                                    manufacturer: 'test',
                                    boards : [
                                        { name : 'test1'},
                                        { name : 'test2'}
                                    ]
                                }
                            ]
                        )}
                            )));
                        }
                    ); // end of subscribe function

                    let fixture = TestBed.createComponent(BoardListComponent);
                    let boardListInstance = fixture.componentInstance;
                    expect(boardListInstance.manufacturerList.length).toBe(1);
                    expect(boardListInstance.manufacturerList[0].boards.length).toBe(2);


                    } // end of test block
                ) // end of inject function
            ) // end of async function 
    ); // end of it function

it('should raise an event when a board has been clicked', 
    async( 
        inject ( 
            [MockBackend], 
            (mockBackend : MockBackend) => {
                // configure response
                mockBackend.connections.subscribe( (conn : any)  => 
                    {
                        conn.mockRespond(new Response(new ResponseOptions(
                        { body: JSON.stringify(
                        [ 
                            {
                                manufacturer: 'test',
                                boards : [
                                    { name : 'test1'},
                                    { name : 'test2'}
                                ]
                            }
                        ]
                    )}
                        )));
                    }
                ); // end of subscribe function

                let fixture = TestBed.createComponent(BoardListComponent);
                fixture.detectChanges();
                let boardItem = 
                    fixture.debugElement.query(By.css('.board_panel'));
                
                expect(boardItem).toBeDefined();

                let eventEmitted : IBoardListItem;

                let component = fixture.componentInstance;
                component.notify.subscribe( (event: IBoardListItem) => {
                    eventEmitted = event;
                });
                boardItem.triggerEventHandler('click', null);

                expect(eventEmitted).toBeDefined();
                expect(eventEmitted.name).toBe('test1');

                } // end of test block
            ) // end of inject function
        ) // end of async function 
); // end of it function

});

