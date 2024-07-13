import { styled } from "../../../stitches.config";

export const Container = styled('div', {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#87CEFA",
    padding: "20px"
});

export const Content = styled('div', {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "1200px",
    gap: "40px",

    '@media (max-width: 768px)': {
        flexDirection: "column",
        padding: '25px',
        gap: "20px"
    }
});

export const TextContainer = styled('div', {
    maxWidth: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",

    '@media (max-width: 768px)': {
        maxWidth: "100%",
        gap: "20px"
    }
});

export const Title = styled('h1', {
    fontSize: "2.5rem",
    lineHeight: "normal",
    color: "#333",

    '@media (max-width: 768px)': {
        fontSize: "2rem"
    }
});

export const Subtitle = styled('p', {
    color: "#666"
});

export const ImageContainer = styled('div', {
    '@media (max-width: 768px)': {
        width: '100%',
        textAlign: 'center'
    },

    'img': {
        borderRadius: '8px',
        '@media (max-width: 768px)': {
            width: '100%',
            height: 'auto'
        }
    }
});