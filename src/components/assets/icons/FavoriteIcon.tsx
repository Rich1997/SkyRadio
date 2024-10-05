import { IconProps } from "@/utils/types";

const FavoriteIcon: React.FC<IconProps> = ({ size = 24, fill = false }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 0 24 24" fill="currentColor">
            {fill ? (
                <path d="M11.994 21.064q-.405-.001-.811-.146a2 2 0 0 1-.724-.457l-1.737-1.587a66 66 0 0 1-4.782-4.815q-2.143-2.41-2.143-5.35 0-2.439 1.629-4.074Q5.054 3 7.493 3a5.9 5.9 0 0 1 2.482.535 6.1 6.1 0 0 1 2.018 1.487 6.1 6.1 0 0 1 2.018-1.487A5.9 5.9 0 0 1 16.494 3q2.44 0 4.078 1.635 1.637 1.635 1.637 4.074 0 2.94-2.14 5.362a59 59 0 0 1-4.828 4.834l-1.706 1.562a1.9 1.9 0 0 1-.727.454 2.5 2.5 0 0 1-.814.143" />
            ) : (
                <path d="M11.994 21.064q-.405-.001-.811-.146a2 2 0 0 1-.724-.457l-1.737-1.587a66 66 0 0 1-4.782-4.815q-2.143-2.41-2.143-5.35 0-2.439 1.629-4.074Q5.054 3 7.493 3a5.9 5.9 0 0 1 2.482.535 6.1 6.1 0 0 1 2.018 1.487 6.1 6.1 0 0 1 2.018-1.487A5.9 5.9 0 0 1 16.494 3q2.442 0 4.079 1.635t1.636 4.074q0 2.94-2.14 5.362a59 59 0 0 1-4.828 4.834l-1.706 1.562a1.9 1.9 0 0 1-.727.454 2.5 2.5 0 0 1-.814.143m-.992-13.725q-.69-.99-1.523-1.527-.834-.537-1.983-.537-1.468 0-2.446.979-.978.98-.978 2.455 0 1.29.916 2.738a19 19 0 0 0 2.19 2.813q1.275 1.363 2.625 2.552t2.191 1.957q.845-.774 2.196-1.963a38 38 0 0 0 2.629-2.551 19 19 0 0 0 2.196-2.807q.92-1.444.92-2.739 0-1.476-.983-2.455-.982-.98-2.455-.979-1.155 0-1.985.537-.83.538-1.52 1.527a1.2 1.2 0 0 1-.444.402 1.196 1.196 0 0 1-1.546-.402" />
            )}
        </svg>
    );
};

export default FavoriteIcon;
