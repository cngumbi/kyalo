//to work on the design of the star icon
//create a simple design to fit our needs
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
                          ? 'sc sc-star'
                          : props.value >= 0.5
                          ? 'sc sc-star-half-f'
                          : 'sc sc-star-e'
                    }"></i>
                </span>
                <span>
                    <i class="${
                        props.value >= 2
                          ? 'sc sc-star'
                          : props.value >= 1.5
                          ? 'sc sc-star-half-f'
                          : 'sc sc-star-e'
                    }"></i>
                </span>
                <span>
                    <i class="${
                        props.value >= 3
                          ? 'sc sc-star'
                          : props.value >= 2.5
                          ? 'sc sc-star-half-f'
                          : 'sc sc-star-e'
                    }"></i>
                </span>
                <span>
                    <i class="${
                        props.value >= 4
                          ? 'sc sc-star'
                          : props.value >= 3.5
                          ? 'sc sc-star-half-f'
                          : 'sc sc-star-e'
                    }"></i>
                </span>
                <span>
                    <i class="${
                        props.value >= 5
                          ? 'sc sc-star'
                          : props.value >= 4.5
                          ? 'sc sc-star-half-f'
                          : 'sc sc-star-e'
                    }"></i>
                </span>
                <span> ${props.text || ''} </span>
            </div>
        `;
    },

};
export default Rating;