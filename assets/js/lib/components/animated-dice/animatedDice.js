// EDIT SETTINGS BELOW THIS LINE
// -----------------------------
const settings = {
	size: 70
};

// DO NOT EDIT CODE BELOW THIS LINE
// --------------------------------

export default customElements.define(
    "animated-dice",
    class extends HTMLElement {
        connectedCallback() {
            this.attachShadow({ mode: "open" });
            this.shadowRoot.innerHTML = `
            	<style>
            		* {
						margin: 0;
						padding: 0;
					}
					.container {
						width: ${settings.size}px;
						height: ${settings.size}px;
						margin: 0 auto;
						perspective: 1000px;
						perspective-origin: 50% 100%;
					}
					.dice {
						width: 100%;
						height: 100%;
						position: absolute;
						transform-style: preserve-3d;
						transition: transform 2s;
					}
					.dice:hover {
						cursor: pointer;
					}
					/*Dice faces */

					.dice .dice__face {
						display: block;
						position: absolute;
						width: ${settings.size}px;
						height: ${settings.size / 2}px;
						background-color: white;
						background-repeat: no-repeat;
						background-size: contain;
						

						margin: 0 auto;
						padding: ${settings.size / 4}px 0;
					}
					.dice .front {
						background-image: url('assets/js/lib/components/animated-dice/images/d1.png');
						transform: translateZ(${settings.size / 2}px);
					}
					.dice .back {
						background-image: url('assets/js/lib/components/animated-dice/images/d2.png');
						transform: rotateX(-180deg) translateZ(${settings.size / 2}px);
					}
					.dice .right {
						background-image: url('assets/js/lib/components/animated-dice/images/d3.png');
						transform: rotateY(90deg) translateZ(${settings.size / 2}px);
					}
					.dice .left {
						background-image: url('assets/js/lib/components/animated-dice/images/d4.png');
						transform: rotateY(-90deg) translateZ(${settings.size / 2}px);
					}
					.dice .top {
						background-image: url('assets/js/lib/components/animated-dice/images/d5.png');
						transform: rotateX(90deg) translateZ(${settings.size / 2}px);
					}
					.dice .bottom {
						background-image: url('assets/js/lib/components/animated-dice/images/d6.png');
						transform: rotateX(-90deg) translateZ(${settings.size / 2}px);
					}
            	</style>
            	<div class="container">
					<div class="dice">
						<div class="dice__face front"></div>
						<div class="dice__face back"></div>
						<div class="dice__face right"></div>
						<div class="dice__face left"></div>
						<div class="dice__face top"></div>
						<div class="dice__face bottom"></div>
					</div>
				</div>
            `;

            const dice = this.shadowRoot.querySelector('.dice'),
            	shadow = this.shadowRoot;
			let rotX = 0,
				rotY = 0;
			
            dice.onclick = function() {
				const diceRoll = Math.floor(Math.random() * 6) + 1;

				// Assign diceRoll to dataset in HTML element
				dice.dataset.diceRoll = diceRoll;
				
				// Assign images to the faces of the dice
				changeFaces(diceRoll, shadow);

				// Rotate dice
				rotX += (90 * 8);
				rotY += (90 * 16);
				dice.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
			}

			function changeFaces(diceRoll) {
				const diceFaces = ['back', 'right', 'left', 'top', 'bottom'],
					frontFaceDiv = shadow.querySelector('.front');
				let diceImages = {
					'd1': 'assets/js/lib/components/animated-dice/images/d1.png',
					'd2': 'assets/js/lib/components/animated-dice/images/d2.png',
					'd3': 'assets/js/lib/components/animated-dice/images/d3.png',
					'd4': 'assets/js/lib/components/animated-dice/images/d4.png',
					'd5': 'assets/js/lib/components/animated-dice/images/d5.png',
					'd6': 'assets/js/lib/components/animated-dice/images/d6.png'
				},
				frontImg = diceImages[`d${diceRoll}`];
				frontFaceDiv.style.backgroundImage = `url(${frontImg})`;

				// Delete diceRoll image from object
				delete diceImages[`d${diceRoll}`];

				// Assign the rest of the dice images to the dice faces
				for (var key in diceImages) {
					const currentFace = diceFaces.shift(),
						currentFaceDiv = shadow.querySelector(`.${currentFace}`);

					currentFaceDiv.style.backgroundImage = `url(${diceImages[key]})`;
				}
			}
        }
    }
);

