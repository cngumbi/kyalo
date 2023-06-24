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
                    DOB: document.getElementById('DOB').value,
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
                        <input type="name" name="sirName" id="sirName" placeholder="SIR NAME"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="firstName">first Name</label>
                        <input type="text" name="firstName" id="firstName" placeholder="FIRST NAME"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" placeholder="LAST NAME"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="positionPlayed"> Position Player</label>
                        <input type="text" name="positionPlayed" id=" positionPlayed" placeholder="POSITION PLAYED"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="age">Age</label>
                        <input type="number" name="age" id="age" min="4" max="55" placeholder="4 Years"/>
                        <small></small>
                    </li>
                    <li class="form-field">
                        <label for="date">Date Of Birth</label>
                        <input type="date" name="DOB" id="DOB" min="1964-01-01"/>
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