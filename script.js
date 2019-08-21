name: Remove Projects
description: Creates frontend delete job for all reports in a specified project.Make sure to have the correct ID for the project your in and visit reports page after.
    author: Gurock Software
version: 1.0
includes: ^ reports / overview / 3
excludes:

js:
$(document).ready(
    function () {
        setInterval(() => {
            let icons = document.querySelectorAll('.icon-small-delete');
            if (icons[0] !== undefined) {
                icons[0].click();

                setTimeout(() => {
                    document
                        .querySelector(
                            '#deleteDialog > div.button-group.dialog-buttons-highlighted > a.button.button-ok.button-left.button-positive.dialog-action-default'
                        )
                        .click();
                }, 0500);
            } else {
                let pagLinks = document.getElementsByClassName('pagination-link');
                if (pagLinks.length > 0) {
                    location.reload();
                } else {
                    clearInterval();
                }
            }
        }, 1000);
    }
);

css:
div.some - class {
}