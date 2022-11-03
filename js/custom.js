/* Author:WebThemez
 * Author URI:https://webthemez.com
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 */


(function($){
	$(document).ready(function(){
	
		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, 400);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		};

		// Isotope filters
		//-----------------------------------------------
		if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.isotope-item',
					layoutMode: 'masonry',
					transitionDuration: '0.4s',
					resizable: false,
					resizesContainer: true,
					filter: "*",
					masonry: {
						isFitWidth: false 
					  }
				});

				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});


				// debounce so filtering doesn't happen every millisecond
				function debounce(fn, threshold) {
					var timeout;
					threshold = threshold || 100;
					return function debounced() {
					clearTimeout(timeout);
					var args = arguments;
					var _this = this;
					function delayed() {
						fn.apply(_this, args);
					}
					timeout = setTimeout(delayed, threshold);
					};
				}


								
				// layout Isotope after each image loads
				$container.imagesLoaded().progress( function() {
					$container.isotope('layout');
				});


			});
		};


		//Modal
		//-----------------------------------------------
		if($(".modal").length>0) {
			$(".modal").each(function() {
				$(".modal").prependTo( "body" );
			});
		}

	}); // End document ready

})(this.jQuery);



(function($){
	$(document).ready(function(){

		//EXTRA STUFF FOR ISOTOPES
		if (jQuery.hasOwnProperty('Isotope')) {
			jQuery.Isotope.prototype._getCenteredMasonryColumns = function() {
			  this.width = this.element.width();
			  
			  var parentWidth = this.element.parent().width();
			  
							// i.e. options.masonry && options.masonry.columnWidth
			  var colW = this.options.masonry && this.options.masonry.columnWidth ||
							// or use the size of the first item
							this.$filteredAtoms.outerWidth(true) ||
							// if there's no items, use size of container
							parentWidth;
			  
			  var cols = Math.floor( parentWidth / colW );
			  cols = Math.max( cols, 1 );
			  // i.e. this.masonry.cols = ....
			  this.masonry.cols = cols;
			  // i.e. this.masonry.columnWidth = ...
			  this.masonry.columnWidth = colW;
			};
			
			jQuery.Isotope.prototype._masonryReset = function() {
			  // layout-specific props
			  this.masonry = {};
			  // FIXME shouldn't have to call this again
			  this._getCenteredMasonryColumns();
			  var i = this.masonry.cols;
			  this.masonry.colYs = [];
			  while (i--) {
				this.masonry.colYs.push( 0 );
			  }
			};
		  
		  
			jQuery.Isotope.prototype._masonryResizeChanged = function() {
			  var prevColCount = this.masonry.cols;
			  // get updated colCount
			  this._getCenteredMasonryColumns();
			  return ( this.masonry.cols !== prevColCount );
			};
			
			jQuery.Isotope.prototype._masonryGetContainerSize = function() {
			  var unusedCols = 0,
				  i = this.masonry.cols;
			  // count unused columns
			  while ( --i ) {
				if ( this.masonry.colYs[i] !== 0 ) {
				  break;
				}
				unusedCols++;
			  }
			  
			  return {
					height : Math.max.apply( Math, this.masonry.colYs ),
					// fit container to columns that have been used;
					width : (this.masonry.cols - unusedCols) * this.masonry.columnWidth
				  };
			};
		}

		//EXTRA STUFF FOR ISOTOPES

	}); // End document ready

})(this.jQuery);