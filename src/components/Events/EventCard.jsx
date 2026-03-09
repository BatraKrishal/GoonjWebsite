const EventCard = ({ leftEvent, rightEvent, activeSlug, onOpen }) => {
  const renderTile = (event, extraClassName = "") => {
    if (!event) {
      return <div className={`lg:w-1/2 hidden lg:block ${extraClassName}`} />;
    }

    const highlighted = activeSlug === event.slug;

    return (
      <button
        id={`event-${event.slug}`}
        type="button"
        onClick={() => onOpen(event)}
        className={`group relative lg:w-1/2 overflow-hidden rounded-[70px] h-full text-left ${extraClassName} ${
          highlighted ? "ring-4 ring-[#ffcc70] ring-offset-4 ring-offset-[#000000]" : ""
        }`}
      >
        <img className="h-full w-full object-cover" src={event.poster} alt={event.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        <div className="opacity-100 lg:opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/20 p-6">
          <h2 className="uppercase text-4xl md:text-5xl border-4 pt-4 pb-4 px-6 text-white border-white rounded-full text-center">
            {event.name}
          </h2>
        </div>
        <div className="absolute left-6 top-6 rotate-[-3deg] border-2 border-white/70">
          <div className="bg-[#871B1A] px-4 py-2">
            <p className="font-paragraph text-[0.65rem] uppercase tracking-[0.35em] text-white/70">
              {event.category}
            </p>
            <p className="mt-1 text-sm uppercase tracking-[0.28em] text-white">
              Open Rules
            </p>
          </div>
        </div>
      </button>
    );
  };

  return (
    <>
      {renderTile(leftEvent)}
      {renderTile(rightEvent)}
    </>
  );
};

export default EventCard;
