export interface Props {
    src: string;
    zoomScale?: number;
    aspectRatio?: number;
    lensSize?: number;
    modifier?: string;
    width?: string | number;
    height?: string | number;
    alt?: string;
    fit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' | 'initial';
}
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    zoomScale: number;
    aspectRatio: number;
    lensSize: number;
    width: string;
    height: string;
    fit: string;
    modifier: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "change:lens": (lesnState: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
    zoomScale: number;
    aspectRatio: number;
    lensSize: number;
    width: string;
    height: string;
    fit: string;
    modifier: string;
}>>> & {
    "onChange:lens"?: ((lesnState: boolean) => any) | undefined;
}, {
    zoomScale: number;
    aspectRatio: number;
    lensSize: number;
    modifier: string;
    width: string | number;
    height: string | number;
    fit: "cover" | "contain" | "fill" | "none" | "scale-down" | "initial";
}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
