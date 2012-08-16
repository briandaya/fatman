
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){})("stage");
//Edge symbol: 'fatman'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_cuerpo}","click",function(sym,e){if(sym.isPlaying())
sym.stop();else
sym.play();});
//Edge binding end
})("fatman");
//Edge symbol end:'fatman'
})(jQuery,AdobeEdge,"EDGE-17388321");