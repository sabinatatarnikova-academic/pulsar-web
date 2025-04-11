import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        vars: {
            palette: {
                [key: string]: any;
                background: {
                    default: string;
                    defaultChannel: string;
                    paper: string;
                };
                text: {
                    primary: string;
                    secondary: string;
                };
                action: {
                    disabled: string;
                    hover: string;
                };
                divider: string;
                grey: {
                    [key: number]: string;
                    50: string;
                    100: string;
                    200: string;
                    400: string;
                    500: string;
                    600: string;
                    700: string;
                    800: string;
                    900: string;
                };
                primary: {
                    main: string;
                    light: string;
                    dark: string;
                };
                success: {
                    main: string;
                    light: string;
                };
            };
            shape: {
                borderRadius: number;
            };
        };
        applyStyles: (mode: string, styles: any) => any;
    }

    interface ThemeOptions {
        vars?: {
            palette?: {
                [key: string]: any;
                background?: {
                    default?: string;
                    defaultChannel?: string;
                    paper?: string;
                };
                text?: {
                    primary?: string;
                    secondary?: string;
                };
                action?: {
                    disabled?: string;
                    hover?: string;
                };
                divider?: string;
                grey?: {
                    [key: number]: string;
                };
                primary?: {
                    main?: string;
                    light?: string;
                    dark?: string;
                };
                success?: {
                    main?: string;
                    light?: string;
                };
            };
            shape?: {
                borderRadius?: number;
            };
        };
        applyStyles?: (mode: string, styles: any) => any;
    }
}

// Замена типов Pro-версий на бесплатные версии
declare module '@mui/x-data-grid-pro/themeAugmentation' {
    import { DataGridComponents } from '@mui/x-data-grid/themeAugmentation';
    export type DataGridProComponents = DataGridComponents;
}

declare module '@mui/x-date-pickers-pro/themeAugmentation' {
    import { PickerComponents } from '@mui/x-date-pickers/themeAugmentation';
    export type PickersProComponents = PickerComponents;
}