class Game {
    constructor() {
        // Get the canvas
        this._canvas = document.getElementById("canvas");
        this._ctx = this._canvas.getContext("2d");

        // Set the canvas to 'fullscreen'
        this._ctx.canvas.width = window.innerWidth;
        this._ctx.canvas.height = window.innerHeight;

        // Get the ressources manager
        this._resManager = new RessourceManager(this);
        this._eventManager = new EventManager(this);

        // Entities
        this._entities = [];

        // Create the character
        this._character = new Character(this);
        this._entities.push(this._character);

        // The map
        this._map = new Map(this);

        // The physics
        this._phisics = new Physics(this);
    }

    renderFrame() {
        // clear the canvas
        this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);

        // Execute events 
        this._eventManager.executeEvents();


        // Display the map
        this._map.render();

        // Render the entities
        this._entities.forEach((entity) => {
            // Apply gravity to the character
            this._phisics.applyGravityToEntity(entity);
            entity.render();
        });
    }
}
