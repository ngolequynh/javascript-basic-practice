const cat = {
  tiredness: 5,
  hunger: 5,
  loneliness: 5,
  happiness: 5,
  feed(food = 1) {
    // if hunger < 0, assign 0 to hunger
    this.hunger = Math.max(this.hunger -= food, 0);
  },
  sleep(hours = 1) {
    // if tiredness < 0, assign 0 to tiredness
    this.tiredness = Math.max(this.tiredness -= hours, 0);
  },
  play(hours = 1) {
    // if happiness > 10, assign 10 to happiness
    this.happiness = Math.min(this.happiness += hours, 10);
  },
  pet(hours = 1) {
    if (this.wannaPetted()) {
      // if loneliness < 0, assign 0 to loneliness
      this.loneliness = Math.max(this.loneliness -= hours, 0);
    }
  },
  status() {
    // status of hunger
    if (this.hunger >= 5) {
      console.log('Meow is really hungry');
    } else if (this.hunger > 0 && this.hunger < 5) {
      console.log('Meow is full');
    } else {
      console.log('Meow is in relation to eating!');
    }

    // status of tiredness
    if (this.tiredness >= 5) {
      console.log('Meow has so many energy');
    } else if (this.tiredness > 0 && this.tiredness < 5) {
      console.log('Meow is sleepy');
    } else {
      console.log('Time to go to bed!');
    }

    // status of loneliness
    if (this.tiredness >= 5) {
      console.log('Meow doesn\'t feel alone');
    } else if (this.tiredness > 0 && this.tiredness < 5) {
      console.log('Meow want to play with you');
    } else {
      console.log('Meow really need you to play with!');
    }

    // status of happiness
    if (this.happiness < 5) {
      console.log('Meow is unhappy');
    } else if (this.happiness >= 5 && this.happiness < 10) {
      console.log('Meow is pleasant');
    } else {
      console.log('Meow is overjoyed!');
    }
  },
  wannaPetted() {
    return (this.loneliness < 5 && this.hunger < 5);
  },
};

cat.feed(2);

cat.sleep(3);

cat.pet();

cat.play(6);
