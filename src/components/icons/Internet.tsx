export default function Internet({ className, width = 300, height = 300 }: { className?: string, width?: number, height?: number }) {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 580" width={width} height={height}>
            <path d="M0 0 C0.84272461 0.20399414 1.68544922 0.40798828 2.55371094 0.61816406 C14.57029657 3.61685434 25.8797978 7.56358023 37 13 C37.66918457 13.31775391 38.33836914 13.63550781 39.02783203 13.96289062 C54.22230554 21.23215042 68.34886834 30.78434514 80 43 C80.78375 43.78375 81.5675 44.5675 82.375 45.375 C83.24125 46.24125 84.1075 47.1075 85 48 C85.62261719 48.56460938 86.24523437 49.12921875 86.88671875 49.7109375 C114.43177888 75.52515902 130.51545871 117.63929819 132.12402344 154.87060547 C133.3941186 203.36158436 118.26533345 246.79970641 84.734375 282.13671875 C83.38085938 283.55404297 83.38085938 283.55404297 82 285 C81.07960938 285.99966797 81.07960938 285.99966797 80.140625 287.01953125 C59.95510211 308.35422995 30.68615048 321.76530135 2.625 328.75 C1.84874268 328.94875732 1.07248535 329.14751465 0.27270508 329.35229492 C-8.82400039 331.4923185 -17.50074458 332.00007838 -27 333 C-27 362.04 -27 391.08 -27 421 C-22.05 422.485 -22.05 422.485 -17 424 C-5.0729267 429.86699122 2.19775714 438.68655676 7 451 C7 452.32 7 453.64 7 455 C8.57785923 454.99723462 8.57785923 454.99723462 10.18759441 454.99441338 C35.7673818 454.95003997 61.3471642 454.91716068 86.92698193 454.89637566 C99.29711969 454.88605735 111.66723205 454.87198642 124.03735352 454.84912109 C134.81750309 454.8292042 145.59763426 454.8162876 156.37780172 454.81182301 C162.08728615 454.80921275 167.79671795 454.80306596 173.50618553 454.78853989 C178.87819856 454.77498287 184.25013717 454.77077356 189.62216568 454.77378464 C191.59545229 454.77323363 193.56874134 454.76924503 195.54201317 454.76158905 C198.23347886 454.75165729 200.9246626 454.7540247 203.61613464 454.75949097 C204.39921484 454.75366528 205.18229503 454.7478396 205.98910493 454.74183738 C211.04876822 454.76966423 214.96844738 455.178608 218.8125 458.625 C220.53970078 462.07940156 220.72308219 465.21353734 220 469 C218.12984906 471.43119623 216.71861655 472.64069173 214 474 C211.30482533 474.10791145 208.63479974 474.15490456 205.93893433 474.15821838 C205.09601369 474.16315636 204.25309305 474.16809434 203.38462937 474.17318195 C200.5440193 474.18860986 197.70343192 474.19693185 194.86279297 474.20532227 C192.83296507 474.21489663 190.80313919 474.22490645 188.77331543 474.23532104 C183.2488295 474.262424 177.72433497 474.28340432 172.19981909 474.30332303 C166.43154671 474.32514941 160.66330096 474.35255444 154.89505005 474.37937927 C143.9657637 474.42935154 133.0364626 474.47427351 122.10714734 474.51740164 C109.66717494 474.56673532 97.22722927 474.62166776 84.78728271 474.67708123 C59.19154672 474.79097087 33.59578512 474.89779465 8 475 C7.6709668 475.81694336 7.34193359 476.63388672 7.00292969 477.47558594 C6.56368164 478.55098633 6.12443359 479.62638672 5.671875 480.734375 C5.2397168 481.79881836 4.80755859 482.86326172 4.36230469 483.95996094 C0.01248096 493.66677189 -8.31014664 501.65860307 -17.8828125 506.2109375 C-29.05501808 510.37474844 -42.51465816 511.10568135 -53.61328125 506.26171875 C-57.66155163 504.12163474 -61.38934486 501.82125335 -65 499 C-65.61617187 498.52175781 -66.23234375 498.04351562 -66.8671875 497.55078125 C-73.33949619 491.84076669 -77.29911285 483.10266145 -80 475 C-81.58558983 474.99641747 -81.58558983 474.99641747 -83.20321178 474.99276257 C-108.90825148 474.93400224 -134.61319718 474.85814094 -160.31813335 474.76428509 C-172.74878276 474.71929442 -185.17940331 474.67988729 -197.61010742 474.65356445 C-208.44304896 474.63061089 -219.27589942 474.59724245 -230.10876876 474.55129844 C-235.84618953 474.52733063 -241.58351989 474.50862516 -247.32098961 474.50238609 C-252.71935348 474.49635137 -258.11748592 474.47640986 -263.51576424 474.44572449 C-265.49870575 474.43691839 -267.48167747 474.43322698 -269.46463776 474.43499184 C-272.16941781 474.4366393 -274.87348794 474.41999046 -277.57817078 474.39872742 C-278.75862749 474.40599878 -278.75862749 474.40599878 -279.96293181 474.41341704 C-284.47181394 474.35481032 -287.42179889 473.81189827 -291 471 C-292.72660813 467.54678373 -292.49047852 463.77601271 -292 460 C-289.6922264 456.70318056 -287.84308996 455.76106797 -284 455 C-281.23675184 454.90794952 -278.49936061 454.86950608 -275.73638916 454.87974548 C-274.89584323 454.87889106 -274.05529729 454.87803663 -273.18928027 454.87715632 C-270.36867829 454.8755073 -267.54813558 454.88101347 -264.72753906 454.88647461 C-262.70727032 454.88675663 -260.68700147 454.88659845 -258.66673279 454.8860321 C-253.17746635 454.88574472 -247.68822168 454.89163202 -242.1989603 454.89860606 C-236.46408256 454.90484932 -230.72920435 454.90544417 -224.99432373 454.90663147 C-214.13237495 454.90974191 -203.27043621 454.91795145 -192.40849185 454.92798096 C-180.04346036 454.93915099 -167.67842839 454.94465479 -155.31339312 454.94967639 C-129.87558984 454.96013428 -104.43779548 454.97772819 -79 455 C-78.86134521 453.90671387 -78.72269043 452.81342773 -78.57983398 451.68701172 C-77.11398113 442.36603919 -70.7362545 434.83643318 -63.69140625 428.91015625 C-57.87004846 424.77859753 -51.97063479 422.39412696 -45 421 C-45 391.96 -45 362.92 -45 333 C-51.27 332.34 -57.54 331.68 -64 331 C-67.62148236 330.33275759 -71.07920112 329.65788644 -74.625 328.75 C-75.49342529 328.53384033 -76.36185059 328.31768066 -77.2565918 328.0949707 C-120.64584258 316.96290737 -157.97916611 289.36064167 -180.94580078 250.82714844 C-203.2306313 212.20286137 -210.42993759 166.30900282 -199.30664062 122.88500977 C-198.30350335 119.22332137 -197.18043838 115.60802089 -196 112 C-195.78504883 111.33339355 -195.57009766 110.66678711 -195.34863281 109.97998047 C-181.86350331 69.03074194 -151.2852225 34.44322977 -113 15 C-112.38447266 14.68337402 -111.76894531 14.36674805 -111.13476562 14.04052734 C-78.04594152 -2.79398332 -36.31251382 -8.87639227 0 0 Z M-48.3125 19.53515625 C-48.869375 20.34855469 -49.42625 21.16195313 -50 22 C-50.7425 22.98871094 -51.485 23.97742188 -52.25 24.99609375 C-61.46904621 37.68074055 -76 59.76860811 -76 76 C-55.21 76 -34.42 76 -13 76 C-11.35 72.7 -9.7 69.4 -8 66 C-4.125 62.75 -4.125 62.75 -2.2578125 61.546875 C-0.70418233 59.98185824 -0.70418233 59.98185824 -1.08984375 57.29296875 C-2.14284571 53.48318055 -3.6460768 50.06721444 -5.4375 46.5625 C-5.962229 45.5262146 -5.962229 45.5262146 -6.49755859 44.46899414 C-15.11388105 26.88712952 -15.11388105 26.88712952 -29 15 C-39.88902215 13.70444993 -39.88902215 13.70444993 -48.3125 19.53515625 Z M-123 43 C-123.83144531 43.62261719 -124.66289062 44.24523437 -125.51953125 44.88671875 C-136.95922241 53.76824275 -147.11555797 63.56215534 -156 75 C-156 75.33 -156 75.66 -156 76 C-136.2 76 -116.4 76 -96 76 C-92.535 66.1 -92.535 66.1 -89 56 C-84.87174882 46.25990737 -80.62000359 36.90535522 -75.4453125 27.69921875 C-74.0958123 25.17893594 -73.00340994 22.67413621 -72 20 C-88.76716065 20 -110.02376827 33.24298655 -123 43 Z M1 20 C1.268125 20.53625 1.53625 21.0725 1.8125 21.625 C2.66458337 23.32916675 3.51607696 25.03362843 4.3671875 26.73828125 C5.57671568 29.154444 6.79049043 31.56823989 8.0078125 33.98046875 C8.71354167 35.3828125 9.41927083 36.78515625 10.125 38.1875 C10.46144531 38.85201172 10.79789062 39.51652344 11.14453125 40.20117188 C11.63373047 41.17473633 11.63373047 41.17473633 12.1328125 42.16796875 C12.45354736 42.80210693 12.77428223 43.43624512 13.10473633 44.08959961 C13.99667645 45.99290789 14.68595972 47.91328107 15.39453125 49.890625 C16.68051954 53.18037137 16.68051954 53.18037137 19.56640625 54.12890625 C20.55511719 54.27199219 21.54382813 54.41507813 22.5625 54.5625 C31.69689437 56.396006 38.37451121 60.17840411 43.74609375 67.875 C45.29968631 70.5078796 46.6328347 73.2656694 48 76 C59.88 76 71.76 76 84 76 C64.22558417 49.63411223 34.46735539 25.75018268 1 20 Z M7 76 C4.0258367 80.31733382 3.3513451 83.81076076 4 89 C6.06146159 92.82842867 8.14162056 95.90545116 12 98 C17.62432013 99.48566947 20.95241188 98.85712535 26 96 C28.87907834 93.2724521 29.87473055 91.45097003 30.9375 87.625 C31.01312805 83.2385733 30.15558434 80.80819899 28 77 C24.66340796 73.90754884 22.36010882 72.133344 17.8125 71.6875 C13.29762285 72.0575719 10.46831987 73.10525241 7 76 Z M-168 95 C-176.66282588 112.32565176 -183.33389794 129.05200313 -184.578125 148.4296875 C-184.6596582 149.66702637 -184.74119141 150.90436523 -184.82519531 152.17919922 C-184.88288086 153.11006348 -184.94056641 154.04092773 -185 155 C-177.68988527 155.2556161 -170.38074253 155.45067637 -163.06705379 155.56993389 C-159.67012464 155.62719714 -156.27626515 155.70473614 -152.88110352 155.82983398 C-148.97190026 155.97295951 -145.06390982 156.02571821 -141.15234375 156.07421875 C-139.94166733 156.13099289 -138.73099091 156.18776703 -137.48362732 156.2462616 C-133.99514038 156.24880258 -131.30316996 156.13400497 -128 155 C-125.55868024 152.39400683 -124.0129076 149.88521266 -122.40455627 146.70417786 C-120.40152972 142.84777129 -117.6703405 140.28675664 -114 138 C-113.01374634 137.74754517 -113.01374634 137.74754517 -112.00756836 137.48999023 C-109.2958221 136.75136591 -107.98079502 136.03105439 -106 134 C-104.19385915 128.27073296 -103.62894022 122.45546206 -103 116.5 C-102.79888247 114.8654748 -102.59448863 113.23134918 -102.38671875 111.59765625 C-101.35019503 103.32430241 -101.35019503 103.32430241 -101 95 C-123.11 95 -145.22 95 -168 95 Z M-81 95 C-82.39096647 99.1728994 -83.37252618 102.5313301 -84.03515625 106.7734375 C-84.20466797 107.8459375 -84.37417969 108.9184375 -84.54882812 110.0234375 C-84.71833984 111.12945312 -84.88785156 112.23546875 -85.0625 113.375 C-85.23587891 114.47328125 -85.40925781 115.5715625 -85.58789062 116.703125 C-86.48860101 122.45938909 -87.31720529 128.21384281 -88 134 C-87.11248047 134.47179687 -87.11248047 134.47179687 -86.20703125 134.953125 C-76.6863928 140.10949036 -71.86015379 145.27969242 -67 155 C-38.95 155 -10.9 155 18 155 C18.10181699 145.00647221 18.10181699 145.00647221 17.34375 135.26171875 C17.20839844 134.17568359 17.07304687 133.08964844 16.93359375 131.97070312 C16.79050781 130.88724609 16.64742188 129.80378906 16.5 128.6875 C16.35691406 127.55376953 16.21382813 126.42003906 16.06640625 125.25195312 C15.71809592 122.50030151 15.36256894 119.74980258 15 117 C14.154375 116.78085938 13.30875 116.56171875 12.4375 116.3359375 C2.4624163 113.54744819 -3.95096408 110.73032059 -9.4375 101.75 C-10.67703837 99.52085743 -11.85954867 97.28090266 -13 95 C-35.44 95 -57.88 95 -81 95 Z M43.17910767 102.64579773 C41.68143609 105.6360436 39.85518523 106.779802 37 108.4375 C34.61135432 110.41871782 33.14100905 111.76413398 32.78027344 114.92578125 C32.90468555 119.84115093 33.77822105 124.64996494 34.61572266 129.48535156 C35.21619683 133.41475691 35.39481735 137.34474215 35.5625 141.3125 C35.77142429 145.9717304 36.22863351 150.37180105 37 155 C62.08 155 87.16 155 113 155 C112.13217963 142.601034 112.13217963 142.601034 109.8125 130.625 C109.59400391 129.73651367 109.37550781 128.84802734 109.15039062 127.93261719 C106.61265506 117.97111154 103.44754637 108.26670007 98.3984375 99.27246094 C97.72433838 98.06876862 97.72433838 98.06876862 97.03662109 96.84075928 C96.52349365 95.92958344 96.52349365 95.92958344 96 95 C89.27474844 94.74602785 82.55073495 94.57117059 75.82177734 94.45068359 C73.53419801 94.40045342 71.24693881 94.33225208 68.96044922 94.24560547 C65.66814343 94.12398618 62.38008257 94.06753772 59.0859375 94.0234375 C58.06696381 93.97182465 57.04799011 93.92021179 55.99813843 93.86703491 C48.56738964 93.86119184 46.34732588 95.99241975 43.17910767 102.64579773 Z M-107.3125 155.6875 C-109.68774248 158.94246192 -110.75893008 161.96961221 -111 166 C-109.51190491 171.2521003 -107.52280925 173.98479384 -103 177 C-99.88111322 178.55944339 -97.4545855 178.28316275 -94 178 C-89.93290017 176.54449393 -87.5185727 174.75276682 -85.0625 171.1875 C-83.81917593 167.45752779 -83.51135217 164.90918263 -84 161 C-86.71213031 155.96318657 -89.31874084 152.83416952 -94.8125 151.125 C-99.82026772 150.92861695 -103.32393739 152.77692728 -107.3125 155.6875 Z M-185 174 C-184.24449113 186.7391511 -184.24449113 186.7391511 -181.8125 198.9375 C-181.59400391 199.77522949 -181.37550781 200.61295898 -181.15039062 201.47607422 C-177.9674069 213.29570322 -173.48970448 224.02059103 -168 235 C-145.89 235 -123.78 235 -101 235 C-101.33 231.37 -101.66 227.74 -102 224 C-102.10626709 222.73559082 -102.21253418 221.47118164 -102.32202148 220.16845703 C-102.64534925 216.48120085 -103.0392212 212.80487171 -103.4375 209.125 C-103.53998047 207.83335937 -103.64246094 206.54171875 -103.74804688 205.2109375 C-104.33928312 198.34706962 -104.33928312 198.34706962 -108.29003906 193.09472656 C-110.92840997 191.73389515 -110.92840997 191.73389515 -113.62182617 190.84130859 C-116.9594167 189.6605944 -118.73631201 187.66316234 -121 185 C-121.70125 184.195625 -122.4025 183.39125 -123.125 182.5625 C-125 180 -125 180 -128 174 C-146.81 174 -165.62 174 -185 174 Z M-67 174 C-68.65 177.3 -70.3 180.6 -72 184 C-74.2109375 186.62109375 -74.2109375 186.62109375 -76.375 188.4375 C-77.08398438 189.05496094 -77.79296875 189.67242187 -78.5234375 190.30859375 C-81.56531564 192.38609097 -84.57927521 193.63920072 -88 195 C-87.29843185 216.20313653 -87.29843185 216.20313653 -81 235 C-78.88318683 235.0942174 -76.76319242 235.11742761 -74.64428711 235.11352539 C-73.98089828 235.11367142 -73.31750946 235.11381744 -72.63401794 235.1139679 C-70.43176044 235.11326881 -68.22958655 235.10547665 -66.02734375 235.09765625 C-64.50419664 235.09579206 -62.98104893 235.09436816 -61.457901 235.09336853 C-57.44162349 235.08954346 -53.42538192 235.07971328 -49.40911865 235.06866455 C-45.31376634 235.05845019 -41.21840824 235.05387086 -37.12304688 235.04882812 C-29.08201472 235.038091 -21.04101183 235.02101472 -13 235 C-12.66471283 234.30853378 -12.32942566 233.61706757 -11.98397827 232.90464783 C-11.31780991 231.54793724 -11.31780991 231.54793724 -10.63818359 230.16381836 C-10.19977142 229.26610214 -9.76135925 228.36838593 -9.30966187 227.44346619 C-5.25849835 219.88511749 2.07720046 215.8268753 9.98828125 213.38671875 C11.65097871 212.89690607 13.32461691 212.44448939 15 212 C17.13065495 199.17469837 18 187.07804346 18 174 C-10.05 174 -38.1 174 -67 174 Z M37 174 C36.34 180.538125 35.68 187.07625 35 193.8125 C34.79117187 195.87346924 34.58234375 197.93443848 34.3671875 200.05786133 C34.20300687 201.6909061 34.03893681 203.32396199 33.875 204.95703125 C33.78863281 205.80535522 33.70226562 206.6536792 33.61328125 207.52770996 C33.53207031 208.33945679 33.45085937 209.15120361 33.3671875 209.98754883 C33.29612793 210.6914827 33.22506836 211.39541656 33.15185547 212.12068176 C33.02079702 213.74262229 33 215.3727731 33 217 C34.60686436 218.40817439 34.60686436 218.40817439 36.6875 219.6875 C42.40447197 223.74503232 44.92181532 228.84363064 48 235 C63.84 235 79.68 235 96 235 C101.91610345 223.40393014 101.91610345 223.40393014 106.25 211.4375 C106.49322998 210.63086914 106.73645996 209.82423828 106.98706055 208.99316406 C107.67792954 206.66724616 108.3449397 204.33622539 109 202 C109.33128906 200.82050781 109.66257812 199.64101562 110.00390625 198.42578125 C112.12969886 190.07665377 112.40761785 182.88573229 113 174 C87.92 174 62.84 174 37 174 Z M7 235 C4.089628 239.365558 3.3493751 242.79500079 4 248 C6.1132784 251.92465988 8.22914397 254.63811003 12 257 C16.85863359 257.88994774 20.95371836 257.47558257 25.4375 255.4375 C28.6464006 252.38513114 29.87263635 250.2980739 31 246 C30.79727767 241.07553661 29.67780908 237.83422656 26.5625 234 C22.84734831 231.10036941 19.74400414 230.64520489 15.0625 230.72265625 C11.57495927 231.1916248 9.5958851 232.70596201 7 235 Z M-156 253 C-152.56335726 258.72773789 -148.55319567 263.14912141 -144 268 C-142.68322266 269.43279297 -142.68322266 269.43279297 -141.33984375 270.89453125 C-123.93407557 289.3988402 -98.11602986 305.11211964 -73 310 C-72.34 309.67 -71.68 309.34 -71 309 C-71.49628906 308.23558594 -71.99257812 307.47117187 -72.50390625 306.68359375 C-83.15406109 289.88989608 -89.73132839 271.80601484 -96 253 C-115.8 253 -135.6 253 -156 253 Z M-76 253 C-73.9562351 260.49380463 -71.88592365 267.27540134 -68.8125 274.3125 C-68.41667725 275.22257812 -68.02085449 276.13265625 -67.61303711 277.0703125 C-61.69897821 290.43157359 -54.42359089 303.57640911 -44 314 C-37.45332188 314.99515194 -30.15413358 315.84478569 -24.26171875 312.3984375 C-21.7806229 309.7585878 -19.92621641 307.07268902 -18 304 C-17.55962402 303.32984863 -17.11924805 302.65969727 -16.66552734 301.96923828 C-5.94011327 287.28014431 -5.94011327 287.28014431 -1.21875 270.7890625 C-1.98216291 268.74405751 -1.98216291 268.74405751 -4.25 266.75 C-8.21944555 262.78055445 -11.21957432 258.34127704 -13 253 C-33.79 253 -54.58 253 -76 253 Z M48 253 C46.02 256.63 44.04 260.26 42 264 C36.00869327 270.29087207 29.3782694 274.45971723 20.578125 275.34375 C14.71266654 278.05876571 13.29321065 283.46154239 10.8125 289.1875 C9.80025632 291.43192849 8.78598448 293.67544354 7.76953125 295.91796875 C7.29854004 296.97161621 6.82754883 298.02526367 6.34228516 299.11083984 C4.74693112 302.54471029 2.9619873 305.76435984 1 309 C31.39674272 304.85173864 62.03871361 282.61263302 80.59179688 258.97167969 C82.94935045 256.23714807 82.94935045 256.23714807 84 253 C72.12 253 60.24 253 48 253 Z M-57.59375 449.8984375 C-61.5592453 455.82464992 -63.05462447 461.91057997 -62 469 C-60.01647966 476.04896206 -57.10517007 482.34964459 -50.7734375 486.4375 C-43.44007774 490.43338643 -37.11321258 492.02199466 -28.9375 489.9375 C-20.77440487 487.11083818 -15.86651857 482.79293418 -11.91015625 475.1484375 C-9.06538962 468.43332314 -9.12208123 461.71651588 -11.5625 454.875 C-14.82211218 447.53517398 -19.99079455 442.59522492 -27.484375 439.6640625 C-39.52476831 436.48569781 -49.92909018 440.24530462 -57.59375 449.8984375 Z " fill="#000000" transform="translate(292,3)"/>
            <path d="M0 0 C0.6875 2.8125 0.6875 2.8125 1 6 C-1.08120695 8.79070932 -3.13910342 9.51841809 -6.4375 10.375 C-10.72374599 11.73659516 -12.7185985 12.96367428 -15 17 C-16.14521566 19.96262312 -17.12232174 22.94807331 -18 26 C-20.3125 26.625 -20.3125 26.625 -23 27 C-26 25 -26 25 -26.72265625 23.140625 C-27.45443923 17.49249724 -25.54387035 12.3069704 -22.375 7.6875 C-16.4791294 0.43326705 -8.92115131 -1.54404542 0 0 Z " fill="#000000" transform="translate(260,446)"/>
        </svg>
    );
}
  