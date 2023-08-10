import { Component, ElementRef, ViewChildren, QueryList  } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-template-home',
  templateUrl: './template-home.component.html',
  styleUrls: ['./template-home.component.css']
})
export class TemplateHomeComponent {

  @ViewChildren('groupElements', { read: ElementRef })
  groupElements!: QueryList<ElementRef>;

  @ViewChildren('slideElements', { read: ElementRef }) slideElements!: ElementRef[];


  ngAfterViewInit(): void {
    if (this.groupElements) {
      this.scrollH()
    }
  }
 
  scrollH(): void{
    gsap.registerPlugin(ScrollTrigger)
    let slides = gsap.utils.toArray('.slide')

      gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: 'none',

      scrollTrigger: {
        trigger: 'section',
        pin: true,
        scrub: 0.1,
        end: "+=3000",

        //modo distorted
        onUpdate: self => {
          let skewAmount = self.getVelocity() / 200
          let scaleAmount = 1 + Math.abs(self.getVelocity() / 1000)

          this.groupElements.forEach(elementRef => {
            const element = elementRef.nativeElement;
            gsap.to(element, {
              skewX: skewAmount,
              scaleY: 0.9,
              overwrite: true,
              ease: "power1.out"
            })
          })
        },

        //modo defaulte
        onScrubComplete: () => {
          this.groupElements.forEach(elementRef => {
            const element = elementRef.nativeElement;
            gsap.to(element, {
              skewX: 0,
              scaleY: 1,
              overwrite: true,
              ease: "power1.out"
            })
          })
        }

      }

    })

  }
}
