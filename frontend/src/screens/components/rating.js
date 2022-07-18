//to work on the design of the star icon
//create a simple design to fit our needs
//the rating functions
const Rating = {
    render: (props) => {
        if (!props.value) {
            return '<div></div>';
        }
        return `
            <div class="rating">
                <span>
                    <i class="${
                        props.value >= 1
                          ? 'ky ky-star'
                          : props.value >= 0.5
                          ? 'ky ky-star-half'
                          : 'ky ky-star-e'
                    }"></i>
                </span>
                <span>
                    <i class="${
                        props.value >= 2
                          ? 'ky ky-star'
                          : props.value >= 1.5
                          ? 'ky ky-star-half'
                          : 'ky ky-star-e'
                    }"></i>
                </span>
                <span>
                    <i class="${
                        props.value >= 3
                          ? 'ky ky-star'
                          : props.value >= 2.5
                          ? 'ky ky-star-half'
                          : 'ky ky-star-e'
                    }"></i>
                </span>
                <span>
                    <i class="${
                        props.value >= 4
                          ? 'ky ky-star'
                          : props.value >= 3.5 
                          ? 'ky ky-star-half'
                          : 'ky ky-star-e'
                    }"></i>
                </span>
                <span>
                    <i class="${
                        props.value >= 5
                          ? 'ky ky-star'
                          : props.value >= 4.5
                          ? 'ky ky-star-half'
                          : 'ky ky-star-e'
                    }"></i>
                </span>
                <span> ${props.text || ''} </span>
            </div>
        `;
    },

};
export default Rating;