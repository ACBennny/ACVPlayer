/*************************************************************
 * This is the script for the General area of the Episode pages of Uvid
 * 
 * @author (Anyanwu Benedict Chukwuemeka)
 * @version (v0.01)
 *************************************************************/
 


const docBody = document.body;
const struct = 
`
        <div class="give_space" id="top"></div>
                
                
        <!-- ------------ Section 1: VIDEO PLAYER ---------------- -->
        <div class="vid_bdr">
            <div class="vid_box">
                <div class="container video_player show-controls">
                    <video preload="metadata" class="main-video">
                        <source src="/samples/360p.mp4" size="360" type="video/mp4">
                        <source src="/samples/360p.mp4" size="480" type="video/mp4">
                        <source src="/samples/720p.mp4" size="640" type="video/mp4">
                        <source src="/samples/720p.mp4" size="720" type="video/mp4">
                        <source src="/samples/1080p.mp4" size="1080" type="video/mp4">
                        <track label="English" kind="subtitles" src="/samples/subCC1.vtt" srclang="en">
                        <track label="Spanish" kind="subtitles" src="/samples/subCC2.vtt" srclang="es">
                        <track label="French" kind="subtitles" src="/samples/subCC3.vtt" srclang="fr">
                    </video>
                </div>
            </div>
        </div>

        
        <div class="vid_sect_space"></div>


        <!-- ---------- Section 2: Video Details ------------- -->
        <div class="section_Base">
            <div class="section_Bdr">
                <div class="section_Box">
                    <div class="side_column left_column">
                        <div class="column_ctnt">
                            <div class="left_section_bdr section_title_bdr">
                                <div class="left_section_box section_title_box">
                                    <h1 class="section_title_textLarge">
                                        <span class="largeText1">Season N/A</span> - <span class="largeText2">Episode N/A</span>
                                    </h1>
                                    <a href="https://acbennny.netlify.app" title="" class="section_title_textSmall">by acbennny</a>
                                </div>
                            </div>
                            <div class="left_section_bdr synopsis_bdr">
                                <div class="left_section_box synopsis_box">
                                    <h5 class="synopsisTitle">Synopsis</h5>
                                    <p class="synopsisText">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus perferendis magni quaerat laboriosam, omnis, ea repudiandae velit dolor vero quidem deserunt. Eos, dolores ullam quis nam pariatur, nemo facilis aspernatur quia, repellat quod perferendis itaque incidunt aliquid architecto consequuntur. Ex magnam officia, id dolores expedita beatae suscipit omnis quas tenetur officiis minima error perspiciatis dolore illum tempore doloribus consequatur, provident ea sunt possimus nihil itaque fugiat. Facilis suscipit ab aut officiis quis ex repudiandae sit corrupti at consectetur provident architecto dolorem laudantium, autem id eveniet magni est praesentium aperiam. Quae saepe recusandae id sint vel minima nam inventore voluptatibus quasi.
                                    </p>
                                    <p class="synopsisTitle"><strong>Genres</strong></p>
                                    <div class="genreTagBox">
                                        <a href="#" target="_blank" class="genreTagCardLink">
                                            <div class="genreTagCard">
                                                <p class="genreTagCardText">Add</p>
                                            </div>
                                        </a>
                                        <a href="#" target="_blank" class="genreTagCardLink">
                                            <div class="genreTagCard">
                                                <p class="genreTagCardText">Some</p>
                                            </div>
                                        </a>
                                        <a href="#" target="_blank" class="genreTagCardLink">
                                            <div class="genreTagCard">
                                                <p class="genreTagCardText">Nice</p>
                                            </div>
                                        </a>
                                        <a href="#" target="_blank" class="genreTagCardLink">
                                            <div class="genreTagCard">
                                                <p class="genreTagCardText">Genres</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="left_section_bdr media_actions_bdr">
                                <div class="left_section_box media_actions_box">
                                    <div class="media_optBdr">
                                        <button class="media_optBox like_buttons add_to_LikedShowsBox" title="I like this epsidoe" aria-label="I like this epsidoe">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="media_optIcon add_to_LikedShows">
                                                <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z"/>
                                            </svg>
                                            <p class="media_optText">Like</p>
                                        </button>
                                        <button class="media_optBox like_buttons add_to_DislikedShowsBox" title="I don't like this episode" aria-label="I don't like this episode">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="media_optIcon add_to_DislikedShows">
                                                <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"/>
                                            </svg>
                                            <p class="media_optText">Dislike</p>
                                        </button>
                                    </div>
                                    <div class="media_optBdr">
                                        <button class="media_optBox openAddToWLBtn" title="Add to Watchlist" aria-label="Add to Watchlist">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="media_optIcon add_to_WatchListIcon">
                                                <path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/>
                                            </svg>
                                            <p class="media_optText">Add to Watchlist</p>
                                        </button>
                                        <button class="media_optBox add_to_DwldBox" title="Dowload episode" aria-label="Dowload episode">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="media_optIcon add_to_Downloads">
                                                <path transform="rotate(90, 256, 256)" d="M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
                                            </svg>
                                            <p class="media_optText">Download</p>
                                        </button>
                                        <button class="media_optBox shareShowBtn" title="Add to Watchlist" aria-label="Add to Watchlist">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="media_optIcon add_to_WatchListIcon">
                                                <path xmlns="http://www.w3.org/2000/svg" d="M384 336a63.78 63.78 0 00-46.12 19.7l-148-83.27a63.85 63.85 0 000-32.86l148-83.27a63.8 63.8 0 10-15.73-27.87l-148 83.27a64 64 0 100 88.6l148 83.27A64 64 0 10384 336z"/>
                                            </svg>
                                            <p class="media_optText">Share</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="side_column right_column">
                        <div class="showlist">
                            <div class="showlist_head">
                                <h3 class="showlist_nextText">Previous Episode</h3>
                            </div>
                            <div class="next_epCardBdr">
                                <a href="#" title="" class="next_epCardBox next_epLink">
                                    <div class="next_epImgBox">
                                        <img src="/samples/image.jpg" alt="" class="next_epImg">
                                        <div class="next_epLengthBox">
                                            <p class="next_epLength">N/Am</p>
                                        </div>
                                        <div class="next_epCardHover">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="next_epCardHoverIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="next_epDetBdr">
                                        <div class="next_epDetBox">
                                            <h4 class="next_epDetTitle">Show Episode [Prev]</h4>
                                            <div class="next_epDetShow">Show Name</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="showlist_head">
                                <h3 class="showlist_nextText">Next Episode</h3>
                            </div>
                            <div class="next_epCardBdr">
                                <a href="#" title="" class="next_epCardBox next_epLink">
                                    <div class="next_epImgBox">
                                        <img src="/samples/image.jpg" alt="" class="next_epImg">
                                        <div class="next_epLengthBox">
                                            <p class="next_epLength">N/Am</p>
                                        </div>
                                        <div class="next_epCardHover">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="next_epCardHoverIcon">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="next_epDetBdr">
                                        <div class="next_epDetBox">
                                            <h4 class="next_epDetTitle">Show Episode [Next]</h4>
                                            <div class="next_epDetShow">Show Name</div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="showlist_epdivider"></div>
                            <div class="showlist_MoreEpBtnBdr">
                                <button class="showlist_MoreEpBtnBox open_MoreEpOverlay">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="showlist_MoreEpBtnIcon">
                                        <path d="M368 96H144a16 16 0 010-32h224a16 16 0 010 32zM400 144H112a16 16 0 010-32h288a16 16 0 010 32zM419.13 448H92.87A44.92 44.92 0 0148 403.13V204.87A44.92 44.92 0 0192.87 160h326.26A44.92 44.92 0 01464 204.87v198.26A44.92 44.92 0 01419.13 448z"/>
                                    </svg>
                                    <div class="showlist_MoreEpBtnText">More Episodes</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                
        <div class="give_space"></div>
`;


window.addEventListener("load" , () => 
{
    loadPlayer();
});



function loadPlayer()
{
    const plyrScript = document.createElement("script");
    plyrScript.setAttribute(`src` , `/player.js`);
    docBody.appendChild(plyrScript);

    plyrScript.addEventListener("load" , () => 
    {
        initApp();
    });
    plyrScript.addEventListener("error" , () => 
    {
        alert("An error occurred while loading the player.\n You can refresh the page to try again.");
    });
}


function initApp()
{
    // INSERT STRUCT

        docBody.insertAdjacentHTML(`afterbegin` , struct);

    // DEFINITIONS

        const nextEpCtntCardBdr = document.querySelectorAll(".next_epCardBdr");   
        const mediaActionBox = document.querySelector(".media_actions_box");
        const likeTheEp = document.querySelector(".add_to_LikedShowsBox");
        const dontLikeTheEp = document.querySelector(".add_to_DislikedShowsBox");
        const openAddToWLBtn = document.querySelector(".openAddToWLBtn");
        const openAddToWLBtnText = openAddToWLBtn.querySelector(".media_optText");
        const shareShowBtn = document.querySelector(".shareShowBtn");
        const openMoreEpOverlay = document.querySelectorAll(".open_MoreEpOverlay");
        const add_to_DwldBox = document.querySelector(".add_to_DwldBox");
        let dwldLink = document.querySelector(".main-video source").getAttribute("src");
        let dwldConfirm;


    // LOAD THE PLAYER

        initPlyr();


    // NEXT AND PREVIOUS EPISODE DETAILS

        // Setting episode card atrributes
        nextEpCtntCardBdr.forEach(cardBdr => 
        {
            const cardlink = cardBdr.querySelector(".next_epCardBox");
            const cardImage = cardBdr.querySelector(".next_epImg");
            const cardEpTitle = cardBdr.querySelector(".next_epDetTitle");
            const cardShowName = cardBdr.querySelector(".next_epDetShow");

            cardlink.title = "Watch " + cardEpTitle.textContent + " of " + cardShowName.textContent ;
            cardImage.alt = "Image of " + cardShowName.textContent + cardEpTitle.textContent;
        });




    // THUMBS UP/ DOWN

        // Like the show
        likeTheEp.addEventListener("click" , () => 
        {
            likeTheEp.classList.toggle("active");
            dontLikeTheEp.classList.remove("active");
        });
        
        // Dislike the show
        dontLikeTheEp.addEventListener("click" , () => 
        {
            dontLikeTheEp.classList.toggle("active");
            likeTheEp.classList.remove("active");
        });



    // ADD TO WATCHLIST

        
        openAddToWLBtn.addEventListener("click" , () => 
        {
            if((openAddToWLBtn.classList.contains("active")))
            {
                openAddToWLBtnText.textContent = "Add to Watchlist";
                openAddToWLBtn.classList.remove("active");
                return;
            }
            openAddToWLBtnText.textContent = "In Watchlist";
            openAddToWLBtn.classList.add("active");
        });




    // DOWNLOAD


        add_to_DwldBox.addEventListener("click" , () => 
        {
            // If user has downloaded, let them know they can't download again
            if((dwldLink == null))
            {
                dwldConfirm = alert("Sorry, you can only download once");
                return;
            }

            // If user hasn't downloaded ask for permission to do so
            dwldConfirm = confirm(`Do you want to download?`);
            if(dwldConfirm == false)
            {
                event.preventDefault();
                return;
            }
            window.open(`${dwldLink}` , `_blank`);
            dwldLink = null;
            console.log("done");
        });





    //  SHARE 

        function shareWithAll()
        {
            if(navigator.share)
            {
                navigator.share(
                {
                    title: `${document.title}`,
                    url: `${window.location.href}`,
                    msg: `Check out the video player and visit https://acbennny.netlify.app to see more of my projects`
                })
                .then(() => 
                {
                    alert(`Thanks for sharing`);
                })
                .catch(console.error);
            }
            else
            {
                alert("An error occurred while attempting to share");
            }
        }
        shareShowBtn.addEventListener("click" , shareWithAll);




    // MORE EPISODES

        openMoreEpOverlay.forEach(btn => 
        {
            btn.addEventListener("click" , () => 
            {
                alert(`No episodes available`);
            });
        });

}





// NO RIGHTCLICKS

    docBody.addEventListener("contextmenu" , (e) => 
    {
        viewCodeProperly(e);
    });

    docBody.addEventListener("keydown" , e => 
    {
        let keyStr = e.key.toLowerCase();

        if((e.ctrlKey && e.shiftKey))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'a'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'b'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'c'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'd'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'e'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'f'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'g'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'h'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'i'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'j'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'k'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'l'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'm'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'n'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'o'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'p'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'q'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'r'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 's'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 't'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'u'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'v'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'w'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'x'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'y'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === 'z'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === '0'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === '1'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === '2'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === '3'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === '4'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === '5'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === '6'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === '7'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === '8'))
        {
            viewCodeProperly(e);
        }
        if((e.ctrlKey && e.shiftKey && keyStr === '9'))
        {
            viewCodeProperly(e);
        }
        if(keyStr === "f12")
        {
            viewCodeProperly(e);
        }
    });

    function viewCodeProperly(e)
    {
        e.preventDefault();
        alert("You cannot view code this way.\nThis alert is not to 'prevent' you but 'advice' you.\n\nYou can view codes for all my projects through \nmy site ==> https://acbennny.netlify.app \nThanks");
    }




