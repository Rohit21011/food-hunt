const Image = ({className,width,height,src,alt}) => {
    return <img
    width={width}
    height={height}
    src={src}
    alt={alt}
    className={className}
  />
}

export default Image;