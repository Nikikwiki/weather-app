import clsx from 'clsx';
import React, { FC, SVGProps, useEffect, useRef } from 'react';
import styles from './styles.scss';

interface IconProps {
    name: string,
    size: string
}

export const WeatherIcon: FC<IconProps> = ({ name, size, ...rest }): JSX.Element | null => {
    const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>> | any>();
    const [ loading, setLoading ] = React.useState(false);

    useEffect((): void => {
        setLoading(true);
        const importIcon = async (): Promise<void> => {
            try {
                ImportedIconRef.current = (await
                import(`../../static/animated/${name}.svg`)).default;
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [ name ]);

    const iconStyles = clsx({
        [styles.large]: size === 'large',
        [styles.small]: size === 'small'
    });

    if (!loading && ImportedIconRef.current) {
        const { current: ImportedIcon } = ImportedIconRef;
        return <ImportedIcon {...rest} className={iconStyles} />;
    }
    return null;
};
