const timeout = 4700;
const home = `<section>
<h2>Who <span class="highlightText">am i ?</span></h2>
</section>

<article>
<div class="textWrapper60">
    <p>
        &emsp; Hi there, I'm Roni Eka Setiawan, you can call me Rons. A professional web developer
        based on jakarta, I've spent the
        last 2 years delivering impactful development solutions for my current
        companies - from small solutions to big solutions. I approach each new project with a full
        toolkit of ideas and a fresh focus to bussiness needs. if you're
        looking for web development whatever the size of the project, I will make sure it's set up
        for
        success.
    </p>
    <p>
        &emsp; From coffee to deployment, my priority is to fully understand bussiness project
        requirements, and we
        can discuss the project over an informal coffee or over Skype/Zoom, whichever suits our team
        best.
        With all assignment aims confirmed, a proposal will be designed, detailing tean exact
        project
        package. After the proposal is accepted, i'll get started creating team project.
    </p>
</div>
</article>`;

const work = `<section>
<h2>My <span class="highlightText">Working</span> Experience</h2>
</section>

<article>
<div class="textWrapper60">
    <p>
        &emsp; For the past two years, I've had the privilege of working at PT. Bank Rakyat
        Indonesia (BRI), one of Indonesia's leading banks. My focus has been on Ceria, an innovative
        digital lending platform designed to make financing more accessible.
    </p>
    <p>
        &emsp; Contributing to Ceria has allowed me to hone my skills in various areas. I played a
        key role in building the Ceria web app using React and its ecosystem, ensuring a smooth and
        user-friendly experience. Additionally, I developed the Ceria web payment system utilizing
        Next.js and its framework, streamlining the transaction process. I wasn't just limited to
        new features; I also enhanced the existing Ceria website, adding polish and improving its
        overall appeal. My responsibilities extended to managing deployments up to the staging
        server, ensuring a seamless transition to production
    </p>
    <p>
        &emsp; To optimize the development and deployment cycle, I implemented a CI/CD pipeline
        using Bitbucket and Jenkins. This efficient system allowed for quicker releases and more
        streamlined quality control. Furthermore, leveraging Docker and Kubernetes allowed for
        containerization and scalable infrastructure, keeping pace with Ceria's growing user base.
    </p>
    <p>
        &emsp; My experience at BRI has been instrumental in developing my technical expertise and
        broadening my understanding of the financial sector. The opportunity to work on a impactful
        project like Ceria has been incredibly rewarding, and I'm excited to see what the future
        holds for both the platform and my career at BRI.
    </p>
</div>
</article>`;

function changeContent(location) {
    const articleDiv = document.getElementById("article");

    const content = location === 'work' ? work : home;

    articleDiv.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', function () {
    var offcanvasDismissButton = document.querySelector('[data-bs-dismiss="offcanvas"]');
    
    setTimeout(function () {
        document.body.classList.add('loaded');
        document.getElementById("loader").remove();
    }, timeout);

    setTimeout(() => {
        offcanvasDismissButton.click();
    }, timeout + 150);

    class TxtType {
        constructor(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 1000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        }
        tick() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        }
    }


    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
});