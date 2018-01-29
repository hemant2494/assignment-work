import { Renderer2, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class MyService {

    constructor(@Inject(DOCUMENT) private _document) {

    }

    public setscript(renderer2: Renderer2): void {

        let s = renderer2.createElement('script');
        s.type = `text/javascript`;
        s.src = "assets/js/main.js";
        renderer2.appendChild(this._document.body, s);
        var a = renderer2.createElement("script");
        a.type = "text/javascript";
        a.src = "assets/js/jquery.min.js";
        renderer2.appendChild(this._document.body, a);
        var b = renderer2.createElement("script");
        b.type = "text/javascript";
        b.src = "assets/js/jquery.min.js";
        renderer2.appendChild(this._document.body, b);
        var c = renderer2.createElement("script");
        c.type = "text/javascript";
        c.src = "assets/js/mixIt.js";
        renderer2.appendChild(this._document.body, c);
        var d = renderer2.createElement("script");
        d.type = "text/javascript";
        d.src = "assets/js/owl.carousel.min.js";
        renderer2.appendChild(this._document.body, d);
        var e = renderer2.createElement("script");
        e.type = "text/javascript";
        e.src = "assets/js/jquery.magnific-popup.min.js";
        renderer2.appendChild(this._document.body, e);
        var f = renderer2.createElement("script");
        f.type = "text/javascript";
        f.src = "assets/js/wow.js";
        renderer2.appendChild(this._document.body, f);
    }
}