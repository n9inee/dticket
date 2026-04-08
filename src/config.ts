let config: Config;

const fileDataURL = (file: any) =>
  new Promise((resolve, reject) => {
    let fr = new FileReader();
    fr.onload = () => resolve(fr.result);
    fr.onerror = reject;
    fr.readAsDataURL(file);
  });

function applyImage(file: any) {
  fileDataURL(file)
    .then((data) => (config.pic = data as unknown as string))
    .catch((err) => console.log(err));
}

export default class Config {
  name: string = "Max Mustermann";
  birth: string = "01.01.1990";
  qr: string =
    "data:image/webp;base64,UklGRgIbAABXRUJQVlA4IPYaAACQ7ACdASp8AXwBPpE0j0eloqEhEACwEglpbvx/j+fghwXhf2M/QD+pdAosHAPgL9AP8J9AH8A/AD9AN0HAH8A/AD9AOsRgD+AfgB+gH/R8wH8A/AD9AP+j1gH6AfwD8AP0A/332//gH8A/AD9AOgA/QD+AfgB+gH/l+AH8A/AD9AOwA/gH4AfoB/1Pvb/AP4B+AH6Ad4B+gH8A/AD9AP+Z94/wD+AfgB+gH/H7BX6AfwD8AP0A/6f2AfwD8Bf0A7wD+AfgB+gH5iiY/AP4D/APwA/QH+d/ir4B+A/wD8AP0A/svz3+AfBPwD8AP0A/oGt+AB6H9rN6GdHt/qCybrNezqQdhucgnEDVYHzb4lUbBOvXCUebdjv2A+gugUtUKJOxTANPNam5MlcVZuOi75Qfjx9RSz9E9DAwqfaJJd1fkA7uAK9zzBPxTw2A1w0jICuteO1LmUdQjbkQA9EmVJ7bvcY3/DgGx/z+M4ZSvTeU5BeL0dVqXSBdow+3h16DeWkwA7WHsVi/VTGS7A12XOHz+k4CryzFyt392FsHiBHYjkOlEYLqsdRB9fh44EICspnoLzNucyW7Yx11bVA9n+90J/C3U6Vl1pBlweQFiRPD11fwjAm0RzNn1tNGPRvOUZAzFxb+038xbZAGdapBVeVM/PTLsQS5yaeEZ/1Pyu6mrh+GcGKx79yG5wb/d8rZL70kckHaw2ACcZQPEtf3efjyeFJuQgG+xsY4b2cJOExXDlFEOW206IhKaJv+hxjy3YKLtWBLnexBtiKnxgcex/VO7ef2kuC1jace8SXI1ZMeDgkcl0C5NTg3pxva7jX2jXd0o68YzY85aXq4akH57uMKn9tN8KAZ2MF0QdwaLtCiDfEd3/j6PF8olugK+35iQTsHp5DHJITsTxGQeTvyShwG4M8FS0g8th2aLwc5DeV4VHGaZG8WxG7D2xR1+Gpi5fX6xG8H3IN7BfzbsYALdnBXt70zRJ/5z60PpDirKG49Tm60pvhCEI5ITNKRghnVwbmN8N5KtcpAb3VWv8zbVm09HyoEvvCz7iG1s7Ba3pyzcehAhUYK28q9zVDTeS45Q4uSHVdSzLZalskgwD32dxEyia4VgF/PMgZRFtOL/WVB1z17bLYs+grr4FA8MP7KcfaE9Pc9FgE4sSYsAIp8XjdWYLKX5dED9Gf5gwMtiioV9ZjxgqkgXwf3Y5cGIaDOI9oqbM0ktshf8Eyl+glqVYORb9eyl8gAS2VKlCgOWlY6x1uzjNZMEv+v2RDoFtPEhkU3VVGTCpSNIhW4BFppYJLtv4w/LalwPtvUfAMqBpJQ0i3wCpoZNFc25qBOHRRY3FfqErQpYs9jsnqMsDop54uJHiWZrmgaNY9AXzqtaTwbX0od77Jh1J1ctcwoeyH2MDsXFyaZQZQb+YFqHRnlpIe0CzAmGa7hGzC9qhNPhfbJbcz1nEOP+96GYQNxlMdLWcxKL0WI9uKC2TtRhvaWnxE0oXsDgMz6mA4MTC8df9JJNAJIxWkhspqf62/PZd6RGtvpysqDpgTGxQ2torzM7ShWJzLdVk6JcbRsZv5WF63jD3zsUnb+JpSgn0KV1bHFGKQI9Kzp+964Qe46qlTwSKbD1l5cNxtmlJ12T/Q/5vzcqUqL+lvj4hdidTOCw5IuKli4sVyOpsjDM6YS/NXc7b1X5PajLaqCm8ztLgIHNp84T1SAkWWhIdoYYTHnpujcjPH00PhVStbsDQExzvrrsrCd/NKZIF4MtEMD/T2MPHtg+mhrdzgzBfeOtFb+JgdO4zZQoINnvxj3zAuLf/UFXpWepKuqZ2PqDJP6X5cfDIGEU8OZ4GjbR2UfHocp81wu7vAm8F39SPSwbhwAACAm7ywgdN6JNsmARG4YBhy5zq3VWbhSA8/vylGL4rp7p9U4Pzm292L6LvUt8bb8cahj8GGfSLEAq5/xZ23jazfVx3uLTUBjy+ebKpRUW9gfn49NkXiNOhb1xpqQESTB+yvvTeYMntXYTwSR7BxLQrVvXqnArqGzTxmSSSd8jNIrziiK0+hGCbau8+2e4/Zlt8BaIpClBOC6C1aznX145CWCvgU//+dFMktI8/Vlr7za9RBQOmJBEhqCQOgsG9q51kSHX80F7OGPtMjyhvuaU2OkQZmA7XV0Q7b1HmnL2ftwyG/Q1OV2LX+6ydMtlx8msrb1MwhLnVvl3mVa/hByqn4Yf4t1P5yHyFgtBErrltVEfvJQht7NZiWCAIl65EqbGb64KtNN6H5rRJcEDvxOwP4xM9KiiIRBkBO4PGWOEo5TO/I1mWG67YtmwU3P+CWJGFNme9KHPj478aB6QitE6ctM3t8hMAY7RE9gwVHnRwyENg2hw6AkdaH8R38Xk7fQmdH30tXO8dfYcMUUtnIo5f8xjegAY4TBcUp0hAEDQ0f6On9fML0fH6BTgLfSY78y4SKqQqjYjKpAOfbfiiHoVr0gkAifbG9i2ySoRCUkj5RMvfY3jMBueILR1bx2LIdtUFfiJhchSq54h5jg3QoKHRMnAACzXCAq+lXjvONkDOw+Ucx8ePo0GsevfIFn4lqqQbDHMrH33pJCfzvVm/HB3Ym+zjJnajZ9NXY//x1CqPHWGOqces8D4+BY/Hx/UK3TR2FrsY7OFdKlO4ktiUsbZQmyAzMUH9nJrxjmVj4QsD/WEAZueKqunDGMe7MYXBdqWjPcd5hFayCYOPZBx4nBv/t1DX4JyAWQIGq+QGW2Rrj8jIDO2vw544lPj10yBnl18qOkau9pkScKxl4+PGAglcgFwrnj1O4+D499Y5yrvyAyu9x9uBhji+H+AAisO7PNXnLHE6Y85jpsZ8gFmIz2O6cgZ2wcezwcDI1HvrjvN9j2vx3TmJSY9SOQVY/NR+Pv8dBcxfn2xyAy3vIAuPbnH53KQGZA5UvYqD/H4eQGbfj+2EI9yKDjkgPwJZZRTz5j2vx5zIBZ2xxg8gC49ZbaUYrOAMMKObRQ683nH0Kqm5AZn+QGXenwL78el/HVeOf+PXeneO6tMY/68wbjjg49s8cQ7ZALJfH4eQGWK8e8oNY/dxiPDPO1x3DkAXMQF7j//IBcHkBl3pMOPa/HK/cOPbPHMrHPnHaMNzkDPd5AZm+O6cfBkhkDO32O8s0QuQDvvIDOByAzl9UpzEIvyAzgc6ruPUvjuPHeUw3Mcfh49o8c5V7yAzCZ72yi49s8c6mquYpno13LyAXg5AZiwoUx1Tj+2qeTiO9zde5Al/xFZjfIBcHkBl3qXkAYERj2tx5PHsgC5BF8X7C0irV2Tutb3QNkbl42JQHY7d5qX+MVx3lipEd47kA4Z5nkDO2DbMYM+Pl+QEIGs4gYkx9fFkH2S1cQkgZ2Wx7V5AFyAVxM4HejqDvpLgkHuPGDPjv5flgtj0ccfmZAZxbUJDDuWCW3DXGF6uXaSsZlX44ZCv/jqvHfypx/nj8XHVmON7kAXIAVfU8e2OQBcf55ALXNF0vaP/x3l7Y9UD6ngZj33jk/x+ZkBnFzILHdOQM+W9cKJCFj0O8fmZAZxWt67yBnxS3IAuQB9MY7y9sfj49rcdoupQvj0v47zfY9wBj5jrnKCePX7IAuO8qhb1PHfyvxWB8w2RXFj495MZj+aWxhDDo+DX1H8eumPw8gMwmOMh49s8c6nd79SdePRjFV4E+5FkQLnWxxcgZ+7H1GC3JjrJxptd+zRjv5U5Al2Xu6OJ9WJ3KQZUXPxoRtsax7a47px5zHG9x+7NeY+HkBl/LWHXcca8ZA41+RzU6W+OJhGQyzx2egK6iNGeY/TmX7sF3qkNVBViWFSBsfj49tccbvHeTqvIGe/zscx+LjkBx0Fx37+3HufcOQGYYq6ZAPPImIo7T/axWFwnIK/dixsAyI7ypzY/r1/6JP3vAsJX3x4vv8dMve8SD7ZJR8gFymgO3VKOEtvZ0xiL07hoUJ7cfAsdY1+Pa/HJ/j8fHtg3Y/NI5j23x3bJjv4w49Bvj4PvctUwL+LE5GC9fHrpkAsikseMFmtzjunIBwLg8cg+QM9A23qMI+PZjbbkAXHwjHU+OocdozXn6Tj1N4/68xDBqvIFCborx6qcd5ZXHVxyAXQLX6Ccfj5AZvePbAMYPMrMFuO80Wq5AFx4v8Z+OQLHHRItz29gfTzZB6St8fj49eF3H4uO8of49c8fj5AZwOON+0XH4+Pv8gFkjj6OqkyBn7sfDMcXvHeZ+37WIuhuO6cfRSLgS+QGdkmTHG7UNVvQxSv2De+q+P/8gFpTo2O/f247px8Ix5zIAuO/mZ73T3IAuO74PHH5junIBZ3d+P7ZmFFdEx/deB2gqxcsepfHeVj8qFgMhAOPlSCf3ov948YNYOy5tfDiqkj+OZWPjpog8d+/C4/Hx89yAzi+WPUvkFWO8qVB4+U46rx38VQq5AZbUqrjj1Q5ADp49c8fR9vHeZhkiyMBAGSM4KHg0x1Xjv5U5Ab7LgOSqNDUEM/HzDPf48X5bHpHx4wguCkVgZ2PUzjunHeX3j1sx4wGvIAuQC0BbbxHRDC+VzufO5A0EmjBnx93kDPtc6WVtV+ZBddrpGCXNSAGNTObeyFFFvwHx+Pj8XHdn/Hfw749urBNXa1WCwTtUbZVgVz83PVzcgZ1wY/HyAzivtx6gabHfH4+QGbsmGPGBik3vCqehGeNF0GpK5Az3eQGYv3Zj4EPwex7nbXHeVaY/NHQkdPM9x0MBY4l2aVU7FT8d1IMgGEtMyWELjvLZR+jza9EHaB+m1PHQtnj57j8XHRgFRyRjQSBksKgx0ckFLpEiZx3/MzjuwRY9PRyJa14bFLn9SgCRY5XqYso7xOM5OUM/y2rdj53HjAa8d5kifjF2yAjXaBMo9IAUlgLsjfnhv8sbiAIPFOSCHH0H+K9aj7VmF6lDdjmzJPxzKx7/G5DW9JvmJsObgKcOvRm2ES6ydjq5nXH4+QGdkpQdqeJ5MLZHRfemQSLjDnwGbYQaP8OwU3BTcMbmGfpbjmAwkBE96nQscysfAsc5A0xljnX1drH+iBD2HU9HsbwwS/jn/jqnIKsd/JBrKLfH7VDEdMdV4/HyAz1ZAO2J3eQA/ivN68vkBrHjczZSEOaWdj558tiEI5Sl77pq50pcUFvM8AVBH8l8xiglpK6Ft3dhvnqTpWTV55WRpD2S1yRH0z0I6PH4uOtDvj8UTwNjVfxdSyWwr2sd2/tq48X+Bd4/7dEbnplWfZjUQY8YEmWJz93j4m4VxKslSvZonFcdV46px+RkBm95AZy8MIwYk7NiYa4x4xTBKZALWjXDQhcr9GxI+0aCj7995/MvULNH4/TmThsyBnv8do3ME+2/junH5mPyhWOIU+PPBzvlWsAAjjelfZvHdOO9IYfOM6Yplo8YM+O/l+MwvsOaH49LnTVaQeA4CLVf5AGR5wwvzZLgl/4Pj//IBcrGtAEsztYe9X34bI7i23yAW5+cfHr0E8WDeTYZOP7kc0xwMh86XjFm0UHx+ZkBnZNjVM5/71D2CJf4WZJwJPwKXRaiY38MQgOgMRbKuvX6HAsVZ7AwY1xM5Wpzj4Nrx2jNj/v8d/BohCYju28QybYMScCXOrIfxxxlod42O7ZMd/O2PkSNY7+V/I8WXxZwYli2fY5lY+kA8daOePft/IrduVsOOJa47zGpEQtY5AzzPIDOX5sd5XfHsBkAXHpzLVyAJw6aBP4ugPkDO42Px8gZ9sRhzeOcjgHptV/E86PqPB5ue6wxtNJmloSTRvSBncvHwLIKseMGrQexLYjd07xh8lxUuPgtwtowtS9WMY9IDs7s8fN8e2uPGD36h5Lb49t8e+iWPtwsl/za+cbJttx5MdqH2gmdEzQWO6cgZ8tMBEeeOhtYLcsgZ5/dmvH2sZ/nHLiNiWZe44rjZ+n1f3ogN3miijWkczTtPOC+G0V/mfEPBEId7wIPF3dqrVdPmf19mKEzZywTRDnGIHD2kDPIuKVdj8PIDLSyxBx+/rdkI1u/gH+KyRwNxG8k+QT6pKUWVjN2BlsJaiuWPHUEScqKbr7S+QM93kBmMTnefb+RnfS0lw6NJ+Pj4FjicV5IpSyx+Pj4X9s8VA2aelgSD0sdLjejMAKQN8wuXT6K8qNFDK47kz8eMCTGhkEWQGYU8fH9tU+6K7Zx4wWZYY7+NkA6J2PhdDklkfAbQbg8++2scbfHnuc+KnHoIscysegZx4vopdkLQDmw4ICDPhoGBhkFWO6cgMwxcv8dgRrWfb7Ya3pPj4FjunIB6ByyBn7seMAMY7jyBny2PWOj49/4621gmxZsIN5xfj4rCDOiR6KXW8QlUtbri/jmRHbkXV2aR8TypK/w0eHkgZ3Lx7X48YQWHeYqrHdOO8w7Gwx+QUQGmXGvmdfvJP4+Jl53MsKPKq8e5nVCaY9UDgj87Y+6PRjpsQ2QGerIBcixb6J+8BV952ora45mcuUiKL0KJ4xD3PivCMBxfJFsoBP+uOUfIAud0GG47+Eem9jZWDd9tBKIHwG8kHMc4lNy244wabm+mwOD1e9GQGerIBcrk3dima0Erx8P73RokM1XoJyAW8GiH4Tvcc0M+ZLU04BfMYnZu743cZAEIdBnFmNfj//HpCTWXLxCAV/3e1Is+p89EG50m+obrJce3OQBceMHMBMgZ+Xue/A14vbj82S3H4+QGdk+ME7jvM9x93kDPByvZY+7hdiY7+HfHdOQM7MZAFyAV6ijPQOj88DEBo+IJUi9Bebdc1ItmogJFmRzWtUDEpkAXIDhnx02T19iEM8CGcmgPy0uuXFA+VhKxcyT/KHYMTc6hYTH6qKigVQ7pCMz6jgFoghnnx8iRrHVeOhHPH/LUdbe0m5LKuyXY9ih7BXW8+muML4u8rj1+2yg6reOKxx+PkBnZR7IGe/x1hjv4MIRZce7Erx6p8dfIJMx/0osFfd5r0RaXNyv/rsfj5AZ2SzTEuSIs0CRn2RNA8jufemYO7cuCcHs6mugVWDHZTiS5A3zavmhuxoOQQW3UzB3Gu4yAWesgD7e8YvzWHUGcpHAAfkBM7j6IDLFQrhw20DTSNAdxsc0KoM01OSB8wiN9IE8i4qtY7yyAKLNHI6PK444rQk/T/mzm1rv0FI+RHc2egnH1Bf2jYQ5Yjdczp4dPHqTCLxwQLz8Ee3e3ausfj5AZo8d4WxFsqxo/93FjieioEndfAB89O+P/8dYY6px+J/yIFe+Wg7ElqxhxU3jUReIMGIQcgM5dnePkSm48+cyAW7M586TCvZJcgZ8UJighMgFi07izZ8zJIKbc0eMILI/H4eQGWYt5FhoqsyBzYxCMiK5Az0RNy6u+WuYK45/PAhig5Lus0fDGHOPGDRIOPU/dop+6zXxBJ+3t7XrYYIgNkxcRuAAKxukorlOAqV4inK6JCUcML+ZD8+JhEiWSadRO33yWd/uARQA49FrQkZOZBnG/vGGPGEFl+k+PF6r8dEYdkAXHMCxMgC48YOXkcfj4+BaD0YaAYZJu7UjFp1hxejwdlERKwH5Cv2Dh8dV44g2Y+S++O/hKf+P0tePbltX3RzeDW92Piufj6HxJcPw+lU7awUCQzSEzdU9IkA+bojW8pzHVedg5o5FDdfTRp8aS7BcUvinkSJbk4RaWK4MYm4mpGVivEPmcbcbGHLyrfTUQ+bq4l4Z6gDi3iDHeuT8XUXowHaP0jaVTc5KUUdIWE13up9MtCE0vHMfIGe/yAzl9xisVLGD/3E+YXHJ7f1qxgPJiQRoUcjEwjwYf4LrfXyz7c68AfHM/Ho44+oL+GFlBYTOUNuGZHx3ljFHx3mFlq5tun0+R31nHnztCcd5os4XY3HEp8e1+Pnxq5ALZbKZ8fMb/IKsgC5AZy6AxWKdsg6XLBMJWTG9OFwfHrpkAXH/dMi47RuY/lj/8gC454zXLsI7wwWMEDp4326jjvKOMgFkvkAXH/sWGYyArVyALj8a3CkZgTTAxIwJ2mO/iMp7CEGCg2SzoRjtz7QoXjh1DM2jePkAs7ZAFx2i6oVj13GwteMnmzqFyPMgC47r9ud3sgFfokmkr3FMTcyihG1qu5Swzrjp+LKfyAXKtTdPdrHO3s8gZ8taNf/nfRIfHohXj/4td/IBfyr1jrnDT4WE0mwliX8BcvuQO/HB3Fo/PEzPrGHAIj0fRB+MmwFxkDPY1e8fqNnGDZRN4J+DVPH4x1IkwNL3wS6Fs3xkg1k34zqPkq68e8WR6PGx1XjnGPXHP/IDRYeXjmVNTrEaWyQBLbyMgAMxcenn1MmPzezg7S0/SVx7X46JkcTOvpkViryS+Fsu3Hj6D72R4ks0SuwSqqr2qWQM9jYRjmIri9ByDJSZthkp8H9sei/j5PhH/HKSYnhIrFQGbtpHRc7yZAIRLceO80NRjDkDOxHHi/27HwLHi/xcmaq48Me49K1vS524E1QyzMEigghZALSmqKyCrHIVj06B9KhcbBzK777TVcd5hYdSALjv46lBG7m1JzVRicU9v3ZXGi5pahINlBczHWRyUOQGaQ6kLA49sud4/NFHqJL/sgM0QO/A+S42x3j12yALjooG4+b4/Fx2gioTedhQH00INDdzDb4XY2LRE5oPT1XuPQBM4wj7FcXD3+naNkXt6DANu43jxg1mi3jIBuRGHZAFyAXKbdJTVa1LjOiIpV6Px8fj5AZfHIAuPxsTkdse1ft35niex4DoRbCg51rLzwo7O/1yEDnm8lbUIi3qraC13x69Y9SuQRY/HyAzDFup2eQHK/SU7spfCfx/ViFRZKpWEy265c0z0+Fvd6a4Pwegu5VA0Uoujq0vyJoYxz9ks0ZjBvcDR6ZZ7JkAXHyRR8ciTl0EIJBui8pvjIBeMTojajpd8gC47yIhTDyAzGhil8dYZiB8D6JFrPq/Xysl3u2QCvy1yxjiezwRI51wY3jVaoMEv6C2VZY7dhe/KqAeufncLvgVF3PI9bGccIdnXRY3FMuyW5ICP4Y65s5fKTx2Efz7V+1F4JxZr5BVj1A4ejC5+PS9gQunom1fH6AhLG8Ghjqjj84wjXE01r1Nv+NfmOuvTCuVEOsWv+zwX35ltc8dYY5PcgC48/aYrlN5z7u0pF+PhjF2QBcceH/VkohECs9I+QBceMILgmiZRUgKBsDsK/jYcdV46px6Di5MFL2GmOlKiuuw5nb5/442VQHJTaqUmF4ocnJRBK0vdPZOFa4AAAA==";
  pic: string = "";

  ticketStart: string;
  ticketEnd: string;
  civ: number;
  orderId: string;
  position: string = "00/11";
  price: string = "63,00";
  code: string;

  constructor() {
    const getDates = (): { start: string; end: string } => {
      const formatter = new Intl.DateTimeFormat("de-DE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      const start = formatter.format(
        new Date(new Date().getFullYear(), new Date().getMonth(), 1),
      );

      const end = formatter.format(
        new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
      );
      return {
        start,
        end,
      };
    };
    const { start: ticketStart, end: ticketEnd } = getDates();
    let civ = Number.parseInt(
      Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0"),
    );

    const orderId = Math.floor(Math.random() * 1000000000)
      .toString()
      .padStart(9, "0");

    const code = Array.from(
      { length: 8 },
      () =>
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[Math.floor(Math.random() * 36)],
    ).join("");
    this.ticketStart = ticketStart;
    this.ticketEnd = ticketEnd;
    this.civ = civ;
    this.orderId = orderId;
    this.code = code;

    this.load();
    this.apply();
  }

  load(): boolean {
    let stored = localStorage.getItem("config");

    if (stored) {
      Object.assign(this, JSON.parse(stored));
      return true;
    }

    this.save();
    return false;
  }

  save() {
    localStorage.setItem("config", JSON.stringify(this));
    this.load();
    this.apply();
  }

  apply() {
    const dbHeaderText = document.querySelector(
      "#ticket-header > div > p:nth-child(2)",
    ) as Element;
    const dataContainer = document.querySelectorAll("#data-container > p");
    const pic = document.querySelector("#data-container > div > img");
    const qr = document.getElementById("qr");

    dbHeaderText.textContent = "Gültig vom " + this.ticketStart;

    qr?.setAttribute("src", this.qr);

    (dataContainer[0] as HTMLElement).textContent = this.name;
    (dataContainer[1] as HTMLElement).textContent = this.birth;
    pic?.setAttribute("src", this.pic);
    ((dataContainer[2] as HTMLElement).firstChild as HTMLElement).textContent =
      `CIV ${this.civ}`;
    (dataContainer[8] as HTMLElement).textContent =
      `Von: ${this.ticketStart} 00:00 Uhr`;
    (dataContainer[9] as HTMLElement).textContent =
      `Von: ${this.ticketEnd} 00:00 Uhr`;
    (dataContainer[11] as HTMLElement).textContent =
      `Auftragsnummer: ${this.orderId}`;
    (dataContainer[12] as HTMLElement).textContent =
      `Position: ${this.position}`;
    (dataContainer[13] as HTMLElement).textContent =
      `Gesamtpreis: ${this.price}€`;
    (dataContainer[15] as HTMLElement).textContent = `Ticketcode: ${this.code}`;

    if (this.pic === "") {
      pic?.setAttribute("hidden", "");
    }

    (document.getElementById("data-name") as HTMLInputElement).value =
      this.name;
    (document.getElementById("data-birth") as HTMLInputElement).value =
      this.birth;
    (document.getElementById("data-qr") as HTMLInputElement).value = this.qr;
  }

  delete() {
    localStorage.removeItem("config");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  config = new Config();
  const qr = document.getElementById("qr");

  if (qr !== null)
    qr.addEventListener("click", (e) => {
      alert(config.orderId);
    });

  const dataName = document.getElementById("data-name") as HTMLInputElement;
  const dataBirth = document.getElementById("data-birth") as HTMLInputElement;
  const dataQR = document.getElementById("data-qr") as HTMLInputElement;

  document.getElementById("data-pic")?.addEventListener("change", (e) => {
    applyImage((e.target as HTMLInputElement).files?.[0]);
  });

  document.getElementById("data-save")?.addEventListener("click", (e) => {
    if (dataName.value) {
      config.name = dataName.value;
    }
    if (dataBirth.value) {
      config.birth = dataBirth.value;
    }
    if (dataQR.value) {
      config.qr = dataQR.value;
    }

    config.save();
  });
  document.getElementById("data-delete")?.addEventListener("click", (e) => {
    config.delete();
    config = new Config();
  });
});
