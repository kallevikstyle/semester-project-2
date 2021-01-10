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
						width: 200px;
						height: 200px;
						position: relative;
						margin: 40px auto;
						/*border: 1px solid #000;*/
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
					/* Dice faces */

					.dice .dice__face {
						display: block;
						position: absolute;
						width: 200px;
						height: 100px;
						background-color: white;
						background-repeat: no-repeat;
						background-size: contain;
						

						margin: 0 auto;
						padding: 50px 0;
					}
					.dice .front {
						background-image: url('lib/components/animated-dice/images/d1.png');
						transform: translateZ(100px);
					}
					.dice .back {
						background-image: url('images/d2.png');
						transform: rotateX(-180deg) translateZ(100px);
					}
					.dice .right {
						background-image: url('images/d3.png');
						transform: rotateY(90deg) translateZ(100px);
					}
					.dice .left {
						background-image: url('images/d4.png');
						transform: rotateY(-90deg) translateZ(100px);
					}
					.dice .top {
						background-image: url('images/d5.png');
						transform: rotateX(90deg) translateZ(100px);
					}
					.dice .bottom {
						background-image: url('images/d6.png');
						transform: rotateX(-90deg) translateZ(100px);
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
					'd1': 'images/d1.png',
					'd2': 'images/d2.png',
					'd3': 'images/d3.png',
					'd4': 'images/d4.png',
					'd5': 'images/d5.png',
					'd6': 'images/d6.png'
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

