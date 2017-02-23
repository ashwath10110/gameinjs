var States = {
	NO_CHANGE: 0,
	MENU: 1,
	GAME: 2,
	END: 3
}

var Game = Class.extend({

	init: function() {
		this.canvas = new Canvas(640, 480);
		this.canvas.ctx.strokeStyle = "white";
		this.currentState = null;
		this.nextState = States.GAME;
	},

	run: function() {

		var self = this;

		this.canvas.animate(function() {

			if (self.nextState !== States.NO_CHANGE) {

				switch (self.nextState) {
					case States.MENU:
						self.currentState = new State(self);
						break;
					case States.GAME:
						self.currentState = new GameState(self);
						break;
					case States.END:
						self.currentState = new State(self);
						break;
				}

				self.nextState = States.NO_CHANGE;
			}

			self.currentState.handleInputs();
			self.currentState.update();
			self.currentState.render(self.canvas.ctx);
		});
	}
});