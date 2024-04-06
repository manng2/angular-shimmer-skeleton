import { Component, input } from "@angular/core";
import { ShimmerRectComponent } from "./rect.component";

@Component({
    selector: "shimmer-product",
    template: `
        <div class="shimmer-product shimmer-pulse">
            <div class="shimmer-product__image">
                <shimmer-rect [width]="avatarWidth()" [height]="200" borderRadius="10px"></shimmer-rect>
            </div>
            <div class="shimmer-product__info">
                <shimmer-rect [width]="firstLineWidth()" [isRandomWidth]="firstLineWidth() ? false : true" borderRadius="2px"></shimmer-rect>
                <shimmer-rect [width]="secondLineWidth()" [isRandomWidth]="secondLineWidth() ? false : true" borderRadius="2px"></shimmer-rect>
            </div>
        </div>
    `,
    standalone: true,
    imports: [ShimmerRectComponent],
    styleUrls: ["../styles/animation.css", '../styles/product.css']
})
export class ShimmerProductComponent {
    readonly avatarWidth = input<number>();
    readonly firstLineWidth = input<number>();
    readonly secondLineWidth = input<number>();
}