import { addPlayer } from "../js/kyalo";
import { setPlayerInfo } from "../localStorage";
import { hideLoading, redirectUser, showLoading, showMessage } from "../util";

const AddPlayerSection = {
    after_render: () => {
        document
            .getElementById('addPlayer-form')
            .addEventListener('submit', async(e) => {
                e.preventDefault();
                showLoading();
                const data = await addPlayer({
                    sirName: document.getElementById('sirName').value,
                    firstName: document.getElementById('firstName').value,
                    lastName: document.getElementById('lastName').value,
                    positionPlayed: document.getElementById('positionPlayed').value,
                    age: document.getElementById('age').value,
                    date: document.getElementById('date').value,
                    month: document.getElementById('month').value,
                    year: document.getElementById('year').value,
                    height: document.getElementById('height').value,
                    weight: document.getElementById('weight').value,
                    gender: document.getElementById('gender').value
                });
                hideLoading();
                if (data.error) {
                    showMessage(data.error);
                } else {
                    setPlayerInfo(data);
                    redirectUser();

                }
            })
    },
    render: () => {
        return `
        <div class="form-container">
            <form id="addPlayer-form">
                <ul class="form-items">
                    <li>
                        <h1>Add PLayer</h1>
                    </li>
                    <li class="form-field">
                        <label for="sirName">Sir Name</label>
                        <input type="name" name="sirName" id="sirName"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="firstName">first Name</label>
                        <input type="name" name="firstName" id="firstName"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="lastName">Last Name</label>
                        <input type="name" name="lastName" id="lastName"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="positionPlayed"> Position Player</label>
                        <input type="name" name="positionPlayed" id=" positionPlayed"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="age">Age</label>
                        <input type="number" name="age" id="age"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="date">Date</label>
                        <input type="number" name="date" id="date"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="month">Month</label>
                        <input type="name" name="month" id="month"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="year">Year</label>
                        <input type="number" name="year" id="year"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="height">Height</label>
                        <input type="number" name="height" id="height"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="weight">Weight</label>
                        <input type="number" name="weight" id="weight"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="gender">Gender</label>
                        <input type="name" name="gender" id="gender"/>
                        <small></small>
                    </li>
                    <li>
                        <button type="submit" class="primary">ADD</button>
                    </li>
                </ul>
            </form>
        </div>
        `;
    }
};
export default AddPlayerSection;