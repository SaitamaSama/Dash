/**
 * @author Gourab Nag <saitama@room11.org>
 */

;(() => {
    const getBackgroundImageUri = () => {
        return "/Resources/Backgrounds/wallpaper_geometric_mountain_2560x1440.jpg";
    };

    const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {
        let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

        return {
            width: srcWidth * ratio,
            height: srcHeight * ratio
        };
    };

    // Set lockscreen img
    let lockScreen = document.querySelector('.lock-screen');
    let lockscreenImage = document.querySelector('#lock-screen-background');
    let imgSrc = getBackgroundImageUri();

    lockscreenImage.setAttribute('src', imgSrc);

    let aspectRatios = calculateAspectRatioFit(lockScreen.offsetWidth, lockScreen.offsetHeight, lockscreenImage.offsetWidth, lockscreenImage.offsetHeight);

    lockscreenImage.setAttribute('height', aspectRatios.height + 'px');
    lockscreenImage.setAttribute('width', aspectRatios.width + 'px');
    lockscreenImage.setAttribute('data-fit', 'true');

    // Copy the image to pin screen and normal screen

    let pinscreenImage = lockscreenImage.cloneNode(false);
    pinscreenImage.setAttribute('id', 'pin-screen-background');
    document.querySelector('.pin-screen').appendChild(pinscreenImage);

    let contentImage = lockscreenImage.cloneNode(false);
    contentImage.setAttribute('id', 'content-bg');
    document.querySelector('main.main-content').appendChild(contentImage);

    // Populate Lock Screen
    let lockScreenContainer = document.createElement('aside');
    lockScreenContainer.classList.add('container');
    lockScreen.appendChild(lockScreenContainer);

    // Internal container
    let clockContainer = document.createElement('section');
    clockContainer.classList.add('clock-container');
    lockScreenContainer.appendChild(clockContainer);

    // Create the clock
    let clock = new Clock();

    let clockElement = document.createElement('section');
    clockElement.classList.add('clock');
    clockContainer.appendChild(clockElement);

    let dateElement = document.createElement('section');
    dateElement.classList.add('date');
    clockContainer.appendChild(dateElement);

    setInterval(() => {
        clock.tick();
        clockElement.innerHTML = clock.getTime().hour + '<br>' + clock.getTime().min;
        dateElement.innerHTML = clock.getTime().date + ' ' + clock.getTime().day + ' ';
    }, 500);

    let notification = new Notification(document.querySelectorAll('.notification'));
    notification.init();

    document.querySelector('.unlock').addEventListener('click', () => {
        lockScreen.classList.remove('active');
        document.querySelector('.pin-screen').classList.add('active');
    });

    // Add pin submit handler
    document.querySelector('#pin-submit').addEventListener('click', () => {
        document.querySelector('.pin-screen').classList.remove('active');
        document.querySelector('main.main-content').classList.add('active');
    });

    // Activate lock screen if user inactive for > 2 minutes
    const lockScreenActivator = () => {
        lockScreen.classList.add('active');
    };

    let t;

    const timerReset = () => {
        clearTimeout(t);
        t = setTimeout(lockScreenActivator, 1000 * 60 * 2);
    };

    window.addEventListener('mousemove', timerReset);
    window.addEventListener('keypress', timerReset);
})();