import React, { useState } from 'react';
import { DropDown } from '../../component/DropDown';
function PediatricForm() {
    const state = [
        {
            name: "Alabama",
            vaue: 'alabama'
        },
        {
            name: "Alaska",
            vaue: 'alaska'
        },
        {
            name: "California",
            vaue: 'california'
        },
        {
            name: "Florida",
            vaue: 'florida'
        }
    ];
    const city = [
        {
            name: "Alexander City",
            vaue: 'alexander'
        },
        {
            name: "Fairbanks",
            vaue: 'fairbanks'
        },
        {
            name: "De Land",
            vaue: 'deland'
        },
        {
            name: "Hollywood",
            vaue: 'hollywood'
        }
    ];

    return (
        <>
            <div class="myfamily-form">
                <div class="container">
                    <div class="select-location">
                        <div class="parent-family">
                            <ul class="tabs">
                                <li class="tab-link current completed" data-tab="tab-1"><span class="mobile"><k>Select location</k></span></li>
                                <li class="tab-link process" data-tab="tab-2"><span class="mobile"><k> Select form</k></span></li>
                                <li class="tab-link" data-tab="tab-3"><span class="mobile"><k>Review form</k></span></li>
                                <li class="tab-link" data-tab="tab-4"><span class="mobile"><k>Parent Guardian <span>authorization</span></k></span></li>
                                <li class="tab-link" data-tab="tab-5"><span class="mobile"><k>Prescribre’s <span>authorization</span></k></span></li>
                            </ul>
                        </div>
                        <div id="tab-1" class="tab-content current">
                            <div class="state-country">
                                <h3>Select location</h3>
                                <div class="col-ff-12">
                                    <div class="col-ff-4">
                                        <label>State</label>
                                        <DropDown optionData={state}  inputName="" />
                                    </div>
                                    <div class="col-ff-4">
                                        <label>Country</label>
                                        <DropDown optionData={city} />
                                    </div>
                                    <div class="col-ff-4">
                                        <label>City</label>
                                        <DropDown optionData={state} />
                                    </div>
                                </div>
                                <div class="continue-button">
                                    <a href="#" class="continue">Continue</a>
                                    <a href="#" class="cancel">Cancel</a>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" class="tab-content">
                            <div class="state-country">
                                <h3>Select form</h3>
                                <div class="col-ff-12">
                                    <div class="col-ff-4">
                                        <label>Form type</label>
                                        <DropDown optionData={state} />
                                    </div>
                                    <div class="col-ff-8">
                                        <label>Select a form</label>
                                        <DropDown optionData={city} />
                                    </div>
                                </div>
                                <div class="continue-button">
                                    <a href="#" class="continue">Continue</a>
                                    <a href="#" class="cancel">Cancel</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PediatricForm;