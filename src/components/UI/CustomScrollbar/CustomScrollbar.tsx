import Scrollbars from "react-custom-scrollbars";

export const CustomScrollbar = ({ children }) => {
  const scrollbarStyle = {
    width: '8px',    // Width of the scrollbar
    backgroundColor: '#f0f0f0', // Background color of the scrollbar track
    borderRadius: '4px',       // Border radius of the scrollbar track
  };

  const thumbStyle = {
    backgroundColor: '#888',  // Color of the scrollbar thumb
    borderRadius: '4px',      // Border radius of the scrollbar thumb
  };

  const thumbHoverStyle = {
    backgroundColor: '#555',  // Color of the scrollbar thumb on hover
  };

  return (
    <Scrollbars
      autoHide // Automatically hide the scrollbar when not scrolling
      style={scrollbarStyle}
      renderThumbVertical={({ style, ...props }) => (
        <div
          {...props}
          style={{ ...style, ...thumbStyle }}
          onMouseEnter={() => {
            // Apply hover style when the user hovers over the scrollbar thumb
            props.onMouseEnter();
          }}
          onMouseLeave={() => {
            // Revert to the normal style when the user stops hovering
            props.onMouseLeave();
          }}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};

