# Sys-MoDEL Lab

System-Level Model Development Engineering Lab: Bringing Clarity to Complex Systems

## Development

Any changes to the CSS should be made to the SCSS files in `_sass/` and compiled using `Sass.jl` as follows:

```julia
Sass.compile_file("style.scss", "../_css/celeste.min.css"; output_style = Sass.compressed)
```

All the `Franklin.jl` related changes are in `_sass/adjust.scss`
