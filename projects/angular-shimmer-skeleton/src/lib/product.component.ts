import { Component, input } from "@angular/core";
import { ShimmerLineComponent } from "./line.component";

@Component({
    selector: "shimmer-product",
    template: `
        <div class="shimmer-product shimmer-pulse">
            <div class="shimmer-product__image">
                <shimmer-line [width]="avatarWidth()" [height]="200" borderRadius="10px"></shimmer-line>
            </div>
            <div class="shimmer-product__info">
                <shimmer-line [width]="firstLineWidth()" [isRandomWidth]="firstLineWidth() ? false : true" borderRadius="2px"></shimmer-line>
                <shimmer-line [width]="secondLineWidth()" [isRandomWidth]="secondLineWidth() ? false : true" borderRadius="2px"></shimmer-line>
            </div>
        </div>
    `,
    standalone: true,
    imports: [ShimmerLineComponent],
    styleUrls: ["../styles/animation.css", '../styles/product.css']
})
export class ShimmerProductComponent {
    readonly avatarWidth = input<number>();
    readonly firstLineWidth = input<number>();
    readonly secondLineWidth = input<number>();
}