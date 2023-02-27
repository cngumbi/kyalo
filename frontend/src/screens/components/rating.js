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

//const Rating = {
//    renderStars: (value) => {
//      const starIcons = ["ky ky-star-e", "ky ky-star-half", "ky ky-star"];
//      const fullStars = Math.floor(value);
//      const halfStars = value - fullStars >= 0.5 ? 1 : 0;
//      const emptyStars = 5 - fullStars - halfStars;
//      const stars = [];
//      for (let i = 0; i < fullStars; i++) {
//        stars.push(starIcons[2]);
//      }
//      if (halfStars) {
//        stars.push(starIcons[1]);
//      }
//      for (let i = 0; i < emptyStars; i++) {
//        stars.push(starIcons[0]);
//      }
//      return stars.map((icon) => `<i class="${icon}"></i>`).join("");
//    },
//    render: (props) => {
//      if (!props.value) {
//        return `<div></div>`;
//      }
//      const stars = Rating.renderStars(props.value);
//      const text = props.text || "";
//      return `
//        <div class="rating">
//          <span>${stars}</span>
//          <span>${stars}</span>
//          <span>${stars}</span>
//          <span>${stars}</span>
//          <span>${stars}</span>
//          <span>${text}</span>
//        </div>
//      `;
//    },
//  };
  