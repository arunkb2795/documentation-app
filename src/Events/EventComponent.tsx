const EventComponent: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };
  return (
    <div>
      <input onChange={handleChange} />
      <div draggable onDragStart={handleDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
