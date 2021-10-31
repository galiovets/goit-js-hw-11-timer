class Timer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.days = document.querySelector('[data-value = "days"]');
    this.hours = document.querySelector('[data-value = "hours"]');
    this.mins = document.querySelector('[data-value = "mins"]');
    this.secs = document.querySelector('[data-value = "secs"]');
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const time = this.targetDate - currentTime;
      this.changeTimer(this.getTime(time));
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }

  getTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  changeTimer({ days, hours, mins, secs }) {
    this.days.textContent = `${days}`;
    this.hours.textContent = `${hours}`;
    this.mins.textContent = `${mins}`;
    this.secs.textContent = `${secs}`;
  }
}

const timer = new Timer({
  selector: "#timer-1",
  targetDate: new Date("Jan 27, 2022"),
});

timer.start();