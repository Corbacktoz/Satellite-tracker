export class SimulationClock {
  constructor(now=Date.now()){this.time=now;this.speed=1;this.paused=false;this.live=true;}
  tick(delta,now=Date.now()){if(this.live&&!this.paused)this.time=now;else if(!this.paused)this.time+=delta*this.speed;return this.time;}
  setSpeed(speed){this.speed=speed;this.live=false;}
  reset(){this.time=Date.now();this.speed=1;this.paused=false;this.live=true;}
  seek(time){this.time=time;this.live=false;}
}

export function formatTimeOffset(deltaMinutes) {
  const totalMins = Math.round(Math.abs(deltaMinutes));
  if (totalMins === 0) return 'Maintenant';
  const hours = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  const sign = deltaMinutes > 0 ? '+' : '−';
  return `${sign}${hours} h ${mins} min`;
}
