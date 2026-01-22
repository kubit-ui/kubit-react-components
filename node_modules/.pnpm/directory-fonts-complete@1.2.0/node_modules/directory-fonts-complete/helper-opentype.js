var $goog$global$$ = {};

// Input 1
function $opentype$Buffer$$($dataView$$, $opt_byteOffset$$10$$) {
	this.$a$ = $dataView$$;
	this.$opentype_Buffer$byteOffset$ = $opt_byteOffset$$10$$ || 0;
}

$opentype$Buffer$$.prototype.$read$ = function $$opentype$Buffer$$$$$read$$($type$$86$$, $opt_byteOffset$$11$$) {
	var $data$$31$$ = $type$$86$$.$read$(this.$a$, $opt_byteOffset$$11$$ || this.$opentype_Buffer$byteOffset$);
	void 0 === $opt_byteOffset$$11$$ && (this.$opentype_Buffer$byteOffset$ += $type$$86$$.$sizeof$);
	return $data$$31$$;
};

function $JSCompiler_StaticMethods_readArray$$($JSCompiler_StaticMethods_readArray$self$$, $type$$87$$, $count$$9$$, $opt_byteOffset$$12$$) {
	for (var $byteOffset$$17$$ = $opt_byteOffset$$12$$ || $JSCompiler_StaticMethods_readArray$self$$.$opentype_Buffer$byteOffset$, $data$$32$$ = [], $i$$7$$ = 0; $i$$7$$ < $count$$9$$; $i$$7$$ += 1) {
		$data$$32$$.push($type$$87$$.$read$($JSCompiler_StaticMethods_readArray$self$$.$a$, $byteOffset$$17$$)), $byteOffset$$17$$ += $type$$87$$.$sizeof$;
	}
	void 0 === $opt_byteOffset$$12$$ && ($JSCompiler_StaticMethods_readArray$self$$.$opentype_Buffer$byteOffset$ += $type$$87$$.$sizeof$ * $count$$9$$);
	return $data$$32$$;
};
// Input 2
// Input 3
// Input 4
// Input 5
// Input 6
var $opentype$Type$BYTE$$ = {
		$sizeof$: 1,
		$read$: function($dataView$$1$$, $opt_byteOffset$$13$$) {
			return $dataView$$1$$.getUint8($opt_byteOffset$$13$$ || 0);
		}
	},
	$opentype$Type$CHAR$$ = {
		$sizeof$: 1,
		$read$: function($dataView$$2$$, $opt_byteOffset$$14$$) {
			return $dataView$$2$$.getInt8($opt_byteOffset$$14$$ || 0);
		}
	},
	$opentype$Type$USHORT$$ = {
		$sizeof$: 2,
		$read$: function($dataView$$3$$, $opt_byteOffset$$15$$) {
			return $dataView$$3$$.getUint16($opt_byteOffset$$15$$ || 0);
		}
	},
	$opentype$Type$SHORT$$ = {
		$sizeof$: 2,
		$read$: function($dataView$$4$$, $opt_byteOffset$$16$$) {
			return $dataView$$4$$.getInt16($opt_byteOffset$$16$$ || 0);
		}
	},
	$opentype$Type$ULONG$$ = {
		$sizeof$: 4,
		$read$: function($dataView$$5$$, $opt_byteOffset$$17$$) {
			return $dataView$$5$$.getUint32($opt_byteOffset$$17$$ || 0);
		}
	},
	$opentype$Type$TAG$$ = {
		$sizeof$: 4,
		$read$: function($dataView$$7$$, $opt_byteOffset$$19$$) {
			var $uint$$ = $dataView$$7$$.getUint32($opt_byteOffset$$19$$ || 0);
			return String.fromCharCode(($uint$$ & 4278190080) >> 24) + String.fromCharCode(($uint$$ & 16711680) >> 16) + String.fromCharCode(($uint$$ & 65280) >> 8) + String.fromCharCode(($uint$$ & 255) >> 0);
		}
	},
	$opentype$Type$FIXED$$ = {
		$sizeof$: 4,
		$read$: function($dataView$$8$$, $opt_byteOffset$$20$$) {
			var $integer$$ = $dataView$$8$$.getInt16($opt_byteOffset$$20$$ || 0),
				$decimal$$ = $dataView$$8$$.getInt16($opt_byteOffset$$20$$ || 2);
			return +($integer$$ + "." + $decimal$$);
		}
	},
	$opentype$Type$LONGDATETIME$$ = {
		$sizeof$: 8,
		$read$: function($dataView$$9$$, $opt_byteOffset$$21$$) {
			var $byteOffset$$18$$ = $opt_byteOffset$$21$$ || 0;
			return {
				$high$: $dataView$$9$$.getInt32($byteOffset$$18$$),
				$low$: $dataView$$9$$.getInt32($byteOffset$$18$$ + 4)
			};
		}
	};
// Input 7
function $opentype$util$pad$$($bufferLength$$) {
	return 0 === $bufferLength$$ % 4 ? $bufferLength$$ : $bufferLength$$ + (4 - $bufferLength$$ % 4);
}

function $opentype$util$extend$$($var_args$$34$$) {
	for (var $i$$8$$ = 1; $i$$8$$ < arguments.length; $i$$8$$ += 1) {
		for (var $p$$ in arguments[$i$$8$$]) {
			arguments[$i$$8$$].hasOwnProperty($p$$) && (arguments[0][$p$$] = arguments[$i$$8$$][$p$$]);
		}
	}
}

function $opentype$util$byteArrayToString$$($array$$12$$) {
	for (var $result$$ = "", $i$$9$$ = 0; $i$$9$$ < $array$$12$$.length; $i$$9$$ += 1) {
		$result$$ += String.fromCharCode($array$$12$$[$i$$9$$]);
	}
	return $result$$;
}

function $opentype$util$struct$$($types$$) {
	var $sizeof$$ = 0,
		$key$$22$$;
	for ($key$$22$$ in $types$$) {
		$sizeof$$ += $types$$[$key$$22$$].$sizeof$;
	}
	return {
		$sizeof$: $sizeof$$,
		$read$: function($dataView$$10$$, $opt_byteOffset$$22$$) {
			var $byteOffset$$19$$ = $opt_byteOffset$$22$$ || 0,
				$struct$$ = {},
				$key$$23$$;
			for ($key$$23$$ in $types$$) {
				$struct$$[$key$$23$$] = $types$$[$key$$23$$].$read$($dataView$$10$$, $byteOffset$$19$$), $byteOffset$$19$$ += $types$$[$key$$23$$].$sizeof$;
			}
			return $struct$$;
		}
	};
};
// Input 8
var $opentype$sfnt$Header$$ = $opentype$util$struct$$({
		version: $opentype$Type$ULONG$$,
		numTables: $opentype$Type$USHORT$$,
		searchRange: $opentype$Type$USHORT$$,
		entrySelector: $opentype$Type$USHORT$$,
		rangeShift: $opentype$Type$USHORT$$
	}),
	$opentype$sfnt$OffsetTable$$ = $opentype$util$struct$$({
		tag: $opentype$Type$TAG$$,
		$b$: $opentype$Type$ULONG$$,
		offset: $opentype$Type$ULONG$$,
		length: $opentype$Type$ULONG$$
	});
// Input 9
// Input 10
function $opentype$tables$common$List$$($buffer$$9$$, $offset$$15$$, $table$$1$$) {
	$buffer$$9$$.$opentype_Buffer$byteOffset$ = $offset$$15$$;
	for (var $data$$34$$ = [], $count$$10$$ = $buffer$$9$$.$read$($opentype$Type$USHORT$$), $records$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$9$$, $opentype$util$struct$$({
			tag: $opentype$Type$TAG$$,
			offset: $opentype$Type$USHORT$$
		}), $count$$10$$), $i$$11$$ = 0; $i$$11$$ < $count$$10$$; $i$$11$$ += 1) {
		$data$$34$$.push({
			tag: $records$$[$i$$11$$].tag,
			table: $table$$1$$($buffer$$9$$, $offset$$15$$ + $records$$[$i$$11$$].offset)
		});
	}
	return $data$$34$$;
}

function $opentype$tables$common$Script$$($buffer$$10$$, $offset$$16$$) {
	$buffer$$10$$.$opentype_Buffer$byteOffset$ = $offset$$16$$;
	var $data$$35$$ = [],
		$defaultLangSys_i$$12$$ = $buffer$$10$$.$read$($opentype$Type$USHORT$$),
		$langSysCount_records$$1$$ = $buffer$$10$$.$read$($opentype$Type$USHORT$$),
		$langSysCount_records$$1$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$10$$, $opentype$util$struct$$({
			tag: $opentype$Type$TAG$$,
			offset: $opentype$Type$USHORT$$
		}), $langSysCount_records$$1$$);
	$defaultLangSys_i$$12$$ && $data$$35$$.push({
		tag: "DFLT",
		table: $opentype$tables$common$LangSys$$($buffer$$10$$, $offset$$16$$ + $defaultLangSys_i$$12$$)
	});
	for ($defaultLangSys_i$$12$$ = 0; $defaultLangSys_i$$12$$ < $langSysCount_records$$1$$.length; $defaultLangSys_i$$12$$ += 1) {
		$data$$35$$.push({
			tag: $langSysCount_records$$1$$[$defaultLangSys_i$$12$$].tag,
			table: $opentype$tables$common$LangSys$$($buffer$$10$$, $offset$$16$$ + $langSysCount_records$$1$$[$defaultLangSys_i$$12$$].offset)
		});
	}
	return $data$$35$$;
}

function $opentype$tables$common$LangSys$$($buffer$$11$$, $offset$$17$$) {
	$buffer$$11$$.$opentype_Buffer$byteOffset$ = $offset$$17$$;
	var $lookupOrder$$ = $buffer$$11$$.$read$($opentype$Type$USHORT$$),
		$reqFeatureIndex$$ = $buffer$$11$$.$read$($opentype$Type$USHORT$$),
		$featureCount$$ = $buffer$$11$$.$read$($opentype$Type$USHORT$$),
		$featureIndex$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$11$$, $opentype$Type$USHORT$$, $featureCount$$);
	return {
		LookupOrder: $lookupOrder$$,
		ReqFeatureIndex: $reqFeatureIndex$$,
		FeatureCount: $featureCount$$,
		FeatureIndex: $featureIndex$$
	};
}

function $opentype$tables$common$Feature$$($buffer$$12$$, $offset$$18$$) {
	$buffer$$12$$.$opentype_Buffer$byteOffset$ = $offset$$18$$;
	var $featureParams$$ = $buffer$$12$$.$read$($opentype$Type$USHORT$$),
		$lookupCount$$ = $buffer$$12$$.$read$($opentype$Type$USHORT$$),
		$lookupListIndex$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$12$$, $opentype$Type$USHORT$$, $lookupCount$$);
	return {
		FeatureParams: $featureParams$$,
		LookupCount: $lookupCount$$,
		LookupListIndex: $lookupListIndex$$
	};
}

function $opentype$tables$common$LookupList$$($buffer$$13$$, $offset$$19$$) {
	var $table$$2$$ = $opentype$tables$gsub$$.$b$;
	$buffer$$13$$.$opentype_Buffer$byteOffset$ = $offset$$19$$;
	for (var $data$$36$$ = [], $count$$11$$ = $buffer$$13$$.$read$($opentype$Type$USHORT$$), $records$$2$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$13$$, $opentype$Type$USHORT$$, $count$$11$$), $i$$13$$ = 0; $i$$13$$ < $count$$11$$; $i$$13$$ += 1) {
		$data$$36$$.push($opentype$tables$common$Lookup$$($buffer$$13$$, $offset$$19$$ + $records$$2$$[$i$$13$$], $table$$2$$));
	}
	return $data$$36$$;
}

function $opentype$tables$common$Lookup$$($buffer$$14$$, $offset$$20$$, $table$$3$$) {
	$buffer$$14$$.$opentype_Buffer$byteOffset$ = $offset$$20$$;
	for (var $lookupType$$ = $buffer$$14$$.$read$($opentype$Type$USHORT$$), $lookupFlag$$ = $buffer$$14$$.$read$($opentype$Type$USHORT$$), $subTableCount$$ = $buffer$$14$$.$read$($opentype$Type$USHORT$$), $subTables$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$14$$, $opentype$Type$USHORT$$, $subTableCount$$), $markFilteringSet$$ = $buffer$$14$$.$read$($opentype$Type$USHORT$$), $i$$14$$ = 0; $i$$14$$ < $subTableCount$$; $i$$14$$ += 1) {
		$subTables$$[$i$$14$$] = $table$$3$$($buffer$$14$$, $lookupType$$, $offset$$20$$ + $subTables$$[$i$$14$$]);
	}
	return {
		LookupType: $lookupType$$,
		LookupFlag: $lookupFlag$$,
		SubTable: $subTables$$,
		MarkFilteringSet: $markFilteringSet$$
	};
}

function $opentype$tables$common$Coverage$$($buffer$$15$$, $offset$$21$$) {
	$buffer$$15$$.$opentype_Buffer$byteOffset$ = $offset$$21$$;
	var $format$$12_records$$3$$ = $buffer$$15$$.$read$($opentype$Type$USHORT$$),
		$count$$12$$ = $buffer$$15$$.$read$($opentype$Type$USHORT$$),
		$data$$38$$ = [];
	if (1 === $format$$12_records$$3$$) {
		$data$$38$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$15$$, $opentype$Type$USHORT$$, $count$$12$$);
	} else {
		if (2 === $format$$12_records$$3$$) {
			for (var $format$$12_records$$3$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$15$$, $opentype$util$struct$$({
					start: $opentype$Type$USHORT$$,
					end: $opentype$Type$USHORT$$,
					$i$: $opentype$Type$USHORT$$
				}), $count$$12$$), $i$$15$$ = 0; $i$$15$$ < $count$$12$$; $i$$15$$ += 1) {
				for (var $j$$2$$ = $format$$12_records$$3$$[$i$$15$$].start; $j$$2$$ < $format$$12_records$$3$$[$i$$15$$].end; $j$$2$$ += 1) {
					$data$$38$$.push($j$$2$$);
				}
			}
		}
	}
	return $data$$38$$;
};
// Input 11
// Input 12
function $opentype$tables$gdef$$($dataView$$13_table$$5$$) {
	$dataView$$13_table$$5$$ = new $opentype$Buffer$$($dataView$$13_table$$5$$);
	$dataView$$13_table$$5$$.$read$($opentype$Type$ULONG$$);
	var $glyphClassDef$$ = $dataView$$13_table$$5$$.$read$($opentype$Type$USHORT$$),
		$data$$40$$ = {};
	0 !== $glyphClassDef$$ && ($data$$40$$.GlyphClassDef = $opentype$tables$gdef$$.$g$($dataView$$13_table$$5$$, $glyphClassDef$$));
	return $data$$40$$;
}
$opentype$tables$gdef$$.$g$ = function $$opentype$tables$gdef$$$$g$$($table$$6$$, $offset$$22$$) {
	$table$$6$$.$opentype_Buffer$byteOffset$ = $offset$$22$$;
	var $classRangeCount_format$$13_startGlyph$$ = $table$$6$$.$read$($opentype$Type$USHORT$$),
		$ids$$ = [];
	if (1 === $classRangeCount_format$$13_startGlyph$$) {
		for (var $classRangeCount_format$$13_startGlyph$$ = $table$$6$$.$read$($opentype$Type$USHORT$$), $glyphCount$$ = $table$$6$$.$read$($opentype$Type$USHORT$$), $classValueArray$$ = $JSCompiler_StaticMethods_readArray$$($table$$6$$, $opentype$Type$USHORT$$, $glyphCount$$), $j$$3$$ = 0; $j$$3$$ < $glyphCount$$; $j$$3$$ += 1) {
			$ids$$[$classRangeCount_format$$13_startGlyph$$ + $j$$3$$] = $classValueArray$$[$j$$3$$];
		}
	} else {
		if (2 === $classRangeCount_format$$13_startGlyph$$) {
			return $classRangeCount_format$$13_startGlyph$$ = $table$$6$$.$read$($opentype$Type$USHORT$$), $JSCompiler_StaticMethods_readArray$$($table$$6$$, $opentype$util$struct$$({
				Start: $opentype$Type$USHORT$$,
				End: $opentype$Type$USHORT$$,
				Class: $opentype$Type$USHORT$$
			}), $classRangeCount_format$$13_startGlyph$$).forEach(function($j$$4_record$$) {
				var $end$$4$$ = $j$$4_record$$.End,
					$classDefinition$$ = $j$$4_record$$.Class;
				for ($j$$4_record$$ = $j$$4_record$$.Start; $j$$4_record$$ < $end$$4$$; $j$$4_record$$ += 1) {
					$ids$$[$j$$4_record$$] = $classDefinition$$;
				}
			}), $ids$$;
		}
	}
};
// Input 13
function $opentype$tables$gsub$$($dataView$$14_table$$7$$) {
	$dataView$$14_table$$7$$ = new $opentype$Buffer$$($dataView$$14_table$$7$$);
	var $data$$41$$ = {};
	$dataView$$14_table$$7$$.$read$($opentype$Type$FIXED$$);
	var $scriptList_scriptListOffset$$ = $dataView$$14_table$$7$$.$read$($opentype$Type$USHORT$$),
		$featureListOffset$$ = $dataView$$14_table$$7$$.$read$($opentype$Type$USHORT$$),
		$lookupListOffset$$ = $dataView$$14_table$$7$$.$read$($opentype$Type$USHORT$$),
		$scriptList_scriptListOffset$$ = $opentype$tables$common$List$$($dataView$$14_table$$7$$, $scriptList_scriptListOffset$$, $opentype$tables$common$Script$$),
		$featureList$$ = $opentype$tables$common$List$$($dataView$$14_table$$7$$, $featureListOffset$$,
			$opentype$tables$common$Feature$$),
		$lookupList$$ = $opentype$tables$common$LookupList$$($dataView$$14_table$$7$$, $lookupListOffset$$);
	$scriptList_scriptListOffset$$.forEach(function($script$$1_scriptTable$$) {
		var $scriptTag$$ = $script$$1_scriptTable$$.tag;
		$script$$1_scriptTable$$ = $script$$1_scriptTable$$.table;
		$data$$41$$[$scriptTag$$] = {};
		$script$$1_scriptTable$$.forEach(function($language_languageTable$$) {
			var $languageTag$$ = $language_languageTable$$.tag;
			$language_languageTable$$ = $language_languageTable$$.table;
			$data$$41$$[$scriptTag$$][$languageTag$$] = {};
			$language_languageTable$$.FeatureIndex.forEach(function($feature$$4_featureIndex$$1_featureTable$$) {
				$feature$$4_featureIndex$$1_featureTable$$ = $featureList$$[$feature$$4_featureIndex$$1_featureTable$$];
				var $featureTag$$ = $feature$$4_featureIndex$$1_featureTable$$.tag;
				$feature$$4_featureIndex$$1_featureTable$$ = $feature$$4_featureIndex$$1_featureTable$$.table;
				$data$$41$$[$scriptTag$$][$languageTag$$][$featureTag$$] = {};
				$feature$$4_featureIndex$$1_featureTable$$.LookupListIndex.forEach(function($lookupIndex$$) {
					$lookupList$$[$lookupIndex$$].SubTable.forEach(function($subTable$$1$$) {
						Object.keys($subTable$$1$$).forEach(function($glyphId$$) {
							$data$$41$$[$scriptTag$$][$languageTag$$][$featureTag$$][$glyphId$$] = $subTable$$1$$[$glyphId$$];
						});
					});
				});
			});
		});
	});
	return $data$$41$$;
}
$opentype$tables$gsub$$.$b$ = function $$opentype$tables$gsub$$$$b$$($buffer$$16_ligatures$$, $ligature_ligatureCount_lookupType$$1$$, $current_offset$$23$$) {
	$buffer$$16_ligatures$$.$opentype_Buffer$byteOffset$ = $current_offset$$23$$;
	var $coverage$$1_coverageOffset_format$$14$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$),
		$data$$42$$ = {};
	if (1 === $ligature_ligatureCount_lookupType$$1$$ && 1 === $coverage$$1_coverageOffset_format$$14$$) {
		for (var $coverage$$1_coverageOffset_format$$14$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$), $deltaGlyphId_k_setOffsets_substitutes$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$SHORT$$), $coverage$$1_coverageOffset_format$$14$$ = $opentype$tables$common$Coverage$$($buffer$$16_ligatures$$, $current_offset$$23$$ + $coverage$$1_coverageOffset_format$$14$$), $i$$16$$ = 0; $i$$16$$ < $coverage$$1_coverageOffset_format$$14$$.length; $i$$16$$ += 1) {
			$data$$42$$[$coverage$$1_coverageOffset_format$$14$$[$i$$16$$]] = [$coverage$$1_coverageOffset_format$$14$$[$i$$16$$] + $deltaGlyphId_k_setOffsets_substitutes$$];
		}
	} else {
		if (1 === $ligature_ligatureCount_lookupType$$1$$ && 2 === $coverage$$1_coverageOffset_format$$14$$) {
			for (var $coverage$$1_coverageOffset_format$$14$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$), $glyphCount$$1_j$$5$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$), $deltaGlyphId_k_setOffsets_substitutes$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$16_ligatures$$, $opentype$Type$USHORT$$, $glyphCount$$1_j$$5$$), $coverage$$1_coverageOffset_format$$14$$ = $opentype$tables$common$Coverage$$($buffer$$16_ligatures$$, $current_offset$$23$$ + $coverage$$1_coverageOffset_format$$14$$),
					$i$$16$$ = 0; $i$$16$$ < $coverage$$1_coverageOffset_format$$14$$.length; $i$$16$$ += 1) {
				$data$$42$$[$coverage$$1_coverageOffset_format$$14$$[$i$$16$$]] = [$deltaGlyphId_k_setOffsets_substitutes$$[$i$$16$$]];
			}
		} else {
			if (2 === $ligature_ligatureCount_lookupType$$1$$ || 3 === $ligature_ligatureCount_lookupType$$1$$) {
				for (var $coverage$$1_coverageOffset_format$$14$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$), $count$$13_ligatureSet$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$), $deltaGlyphId_k_setOffsets_substitutes$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$16_ligatures$$, $opentype$Type$USHORT$$, $count$$13_ligatureSet$$), $coverage$$1_coverageOffset_format$$14$$ = $opentype$tables$common$Coverage$$($buffer$$16_ligatures$$, $current_offset$$23$$ + $coverage$$1_coverageOffset_format$$14$$),
						$components_sets$$ = [], $i$$16$$ = 0; $i$$16$$ < $count$$13_ligatureSet$$; $i$$16$$ += 1) {
					$buffer$$16_ligatures$$.$opentype_Buffer$byteOffset$ = $current_offset$$23$$ + $deltaGlyphId_k_setOffsets_substitutes$$[$i$$16$$], $glyphCount$$1_j$$5$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$), $components_sets$$.push($JSCompiler_StaticMethods_readArray$$($buffer$$16_ligatures$$, $opentype$Type$USHORT$$, $glyphCount$$1_j$$5$$));
				}
				for ($i$$16$$ = 0; $i$$16$$ < $coverage$$1_coverageOffset_format$$14$$.length; $i$$16$$ += 1) {
					$data$$42$$[$coverage$$1_coverageOffset_format$$14$$[$i$$16$$]] = 2 === $ligature_ligatureCount_lookupType$$1$$ ? [$components_sets$$[$i$$16$$]] : $components_sets$$[$i$$16$$];
				}
			} else {
				if (4 === $ligature_ligatureCount_lookupType$$1$$) {
					for (var $coverage$$1_coverageOffset_format$$14$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$), $count$$13_ligatureSet$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$), $deltaGlyphId_k_setOffsets_substitutes$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$16_ligatures$$, $opentype$Type$USHORT$$, $count$$13_ligatureSet$$), $coverage$$1_coverageOffset_format$$14$$ = $opentype$tables$common$Coverage$$($buffer$$16_ligatures$$, $current_offset$$23$$ + $coverage$$1_coverageOffset_format$$14$$),
							$ligatureSetOffsets$$ = [], $i$$16$$ = 0; $i$$16$$ < $count$$13_ligatureSet$$; $i$$16$$ += 1) {
						$buffer$$16_ligatures$$.$opentype_Buffer$byteOffset$ = $current_offset$$23$$ + $deltaGlyphId_k_setOffsets_substitutes$$[$i$$16$$], $ligature_ligatureCount_lookupType$$1$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$), $ligatureSetOffsets$$.push($JSCompiler_StaticMethods_readArray$$($buffer$$16_ligatures$$, $opentype$Type$USHORT$$, $ligature_ligatureCount_lookupType$$1$$));
					}
					$count$$13_ligatureSet$$ = [];
					for ($i$$16$$ = 0; $i$$16$$ < $deltaGlyphId_k_setOffsets_substitutes$$.length; $i$$16$$ += 1) {
						$ligature_ligatureCount_lookupType$$1$$ = [];
						for ($glyphCount$$1_j$$5$$ = 0; $glyphCount$$1_j$$5$$ < $ligatureSetOffsets$$[$i$$16$$].length; $glyphCount$$1_j$$5$$ += 1) {
							$buffer$$16_ligatures$$.$opentype_Buffer$byteOffset$ = $current_offset$$23$$ + $deltaGlyphId_k_setOffsets_substitutes$$[$i$$16$$] + $ligatureSetOffsets$$[$i$$16$$][$glyphCount$$1_j$$5$$];
							var $ligGlyph$$ = $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$),
								$components_sets$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$16_ligatures$$, $opentype$Type$USHORT$$, $buffer$$16_ligatures$$.$read$($opentype$Type$USHORT$$) - 1);
							$ligature_ligatureCount_lookupType$$1$$.push({
								$ligGlyph$: $ligGlyph$$,
								$components$: $components_sets$$
							});
						}
						$count$$13_ligatureSet$$.push($ligature_ligatureCount_lookupType$$1$$);
					}
					for ($i$$16$$ = 0; $i$$16$$ < $coverage$$1_coverageOffset_format$$14$$.length; $i$$16$$ += 1) {
						for ($buffer$$16_ligatures$$ = $count$$13_ligatureSet$$[$i$$16$$], $data$$42$$[$coverage$$1_coverageOffset_format$$14$$[$i$$16$$]] = {}, $glyphCount$$1_j$$5$$ = 0; $glyphCount$$1_j$$5$$ < $buffer$$16_ligatures$$.length; $glyphCount$$1_j$$5$$ += 1) {
							for ($components_sets$$ = $buffer$$16_ligatures$$[$glyphCount$$1_j$$5$$].$components$, $ligature_ligatureCount_lookupType$$1$$ = $buffer$$16_ligatures$$[$glyphCount$$1_j$$5$$].$ligGlyph$, $current_offset$$23$$ = $data$$42$$[$coverage$$1_coverageOffset_format$$14$$[$i$$16$$]], $deltaGlyphId_k_setOffsets_substitutes$$ = 0; $deltaGlyphId_k_setOffsets_substitutes$$ < $components_sets$$.length; $deltaGlyphId_k_setOffsets_substitutes$$ += 1) {
								$deltaGlyphId_k_setOffsets_substitutes$$ < $components_sets$$.length - 1 ? ($current_offset$$23$$[$components_sets$$[$deltaGlyphId_k_setOffsets_substitutes$$]] = {}, $current_offset$$23$$ = $current_offset$$23$$[$components_sets$$[$deltaGlyphId_k_setOffsets_substitutes$$]]) : $current_offset$$23$$[$components_sets$$[$deltaGlyphId_k_setOffsets_substitutes$$]] = $ligature_ligatureCount_lookupType$$1$$;
							}
						}
					}
				}
			}
		}
	}
	return $data$$42$$;
};
// Input 14
// Input 15
// Input 16
// Input 17
// Input 18
function $opentype$tables$name$$($dataView$$19_format$$15$$) {
	var $table$$12$$ = new $opentype$Buffer$$($dataView$$19_format$$15$$),
		$data$$45$$ = {};
	$dataView$$19_format$$15$$ = $table$$12$$.$read$($opentype$Type$USHORT$$);
	var $count$$14_nameRecords$$ = $table$$12$$.$read$($opentype$Type$USHORT$$),
		$stringOffset$$ = $table$$12$$.$read$($opentype$Type$USHORT$$),
		$langTagRecords$$ = [],
		$count$$14_nameRecords$$ = $JSCompiler_StaticMethods_readArray$$($table$$12$$, $opentype$util$struct$$({
			$platformID$: $opentype$Type$USHORT$$,
			$encodingID$: $opentype$Type$USHORT$$,
			$languageID$: $opentype$Type$USHORT$$,
			$nameID$: $opentype$Type$USHORT$$,
			length: $opentype$Type$USHORT$$,
			offset: $opentype$Type$USHORT$$
		}), $count$$14_nameRecords$$);
	1 === $dataView$$19_format$$15$$ && ($langTagRecords$$ = $JSCompiler_StaticMethods_readArray$$($table$$12$$, $opentype$util$struct$$({
		length: $opentype$Type$USHORT$$,
		offset: $opentype$Type$USHORT$$
	}), $table$$12$$.$read$($opentype$Type$USHORT$$)).map(function($record$$1$$) {
		return $opentype$util$byteArrayToString$$($JSCompiler_StaticMethods_readArray$$($table$$12$$, $opentype$Type$USHORT$$, $record$$1$$.length, $stringOffset$$ + $record$$1$$.offset));
	}));
	$count$$14_nameRecords$$.forEach(function($record$$2$$) {
		var $language$$1$$ = null;
		if (1 === $record$$2$$.$platformID$ && 0 === $record$$2$$.$encodingID$ || 3 === $record$$2$$.$platformID$ && 1 === $record$$2$$.$encodingID$) {
			32768 > $record$$2$$.$languageID$ && 1 === $record$$2$$.$platformID$ ? $language$$1$$ = $opentype$tables$name$$.$c$[$record$$2$$.$languageID$] : 32768 > $record$$2$$.$languageID$ && 3 === $record$$2$$.$platformID$ ? $language$$1$$ = $opentype$tables$name$$.$f$[$record$$2$$.$languageID$] : $langTagRecords$$[$record$$2$$.$languageID$ - 32768] && ($language$$1$$ = $langTagRecords$$[$record$$2$$.$languageID$ - 32768]), $language$$1$$ && ($data$$45$$[$language$$1$$] || ($data$$45$$[$language$$1$$] = {}), $data$$45$$[$language$$1$$][$record$$2$$.$nameID$] = $opentype$util$byteArrayToString$$($JSCompiler_StaticMethods_readArray$$($table$$12$$, $opentype$Type$BYTE$$, $record$$2$$.length, $stringOffset$$ + $record$$2$$.offset)));
		}
	});
	return $data$$45$$;
}
$opentype$tables$name$$.$c$ = {
	0: "en",
	1: "fr",
	2: "de",
	3: "it",
	4: "nl",
	5: "sv",
	6: "es",
	7: "da",
	8: "pt",
	9: "no",
	10: "he",
	11: "ja",
	12: "arb",
	13: "fi",
	14: "el",
	15: "is",
	16: "mt",
	17: "tr",
	18: "hr",
	19: "zh-Hant",
	20: "ur",
	21: "hi",
	22: "th",
	23: "ko",
	24: "lt",
	25: "pl",
	26: "hu",
	27: "et",
	28: "lv",
	29: "smi",
	30: "fo",
	31: "fa",
	32: "ru",
	33: "zh-Hans",
	34: "nl-BE",
	35: "gle",
	36: "sq",
	37: "ro",
	38: "cs",
	39: "sk",
	40: "sl",
	41: "yi",
	42: "sr",
	43: "mk",
	44: "bg",
	45: "uk",
	46: "be",
	47: "uz",
	48: "kk",
	49: "az-Cyrl",
	50: "az-Arab",
	51: "hy",
	52: "ka",
	53: "mo",
	54: "ky",
	55: "tg",
	56: "tk",
	57: "mn-Mong",
	58: "mn-Cyrl",
	59: "ps",
	60: "ku",
	61: "ks",
	62: "sd",
	63: "bo",
	64: "ne",
	65: "sa",
	66: "mr",
	67: "bn",
	68: "as",
	69: "gu",
	70: "pa",
	71: "or",
	72: "ml",
	73: "kn",
	74: "ta",
	75: "te",
	76: "se",
	77: "my",
	78: "km",
	79: "lo",
	80: "vi",
	81: "id",
	82: "tl",
	83: "ms",
	84: "ms",
	85: "am",
	86: "ti",
	87: "gax",
	88: "so",
	89: "sw",
	90: "rw",
	91: "rn",
	92: "ny",
	93: "mg",
	94: "eo",
	128: "cy",
	129: "eu",
	130: "ca",
	131: "la",
	132: "qu",
	133: "gn",
	134: "ay",
	135: "tt",
	136: "ug",
	137: "dz",
	138: "jv",
	139: "su",
	140: "gl",
	141: "af",
	142: "br",
	143: "iu",
	144: "gd",
	145: "gv",
	146: "gle",
	147: "to",
	148: "el-polyton",
	149: "kl",
	150: "az"
};
$opentype$tables$name$$.$f$ = {
	4: "zh-CHS",
	1025: "ar-SA",
	1026: "bg-BG",
	1027: "ca-ES",
	1028: "zh-TW",
	1029: "cs-CZ",
	1030: "da-DK",
	1031: "de-DE",
	1032: "el-GR",
	1033: "en-US",
	1035: "fi-FI",
	1036: "fr-FR",
	1037: "he-IL",
	1038: "hu-HU",
	1039: "is-IS",
	1040: "it-IT",
	1041: "ja-JP",
	1042: "ko-KR",
	1043: "nl-NL",
	1044: "nb-NO",
	1045: "pl-PL",
	1046: "pt-BR",
	1048: "ro-RO",
	1049: "ru-RU",
	1050: "hr-HR",
	1051: "sk-SK",
	1052: "sq-AL",
	1053: "sv-SE",
	1054: "th-TH",
	1055: "tr-TR",
	1056: "ur-PK",
	1057: "id-ID",
	1058: "uk-UA",
	1059: "be-BY",
	1060: "sl-SI",
	1061: "et-EE",
	1062: "lv-LV",
	1063: "lt-LT",
	1065: "fa-IR",
	1066: "vi-VN",
	1067: "hy-AM",
	1068: "Lt-az-AZ",
	1069: "eu-ES",
	1071: "mk-MK",
	1078: "af-ZA",
	1079: "ka-GE",
	1080: "fo-FO",
	1081: "hi-IN",
	1086: "ms-MY",
	1087: "kk-KZ",
	1088: "ky-KZ",
	1089: "sw-KE",
	1091: "Lt-uz-UZ",
	1092: "tt-RU",
	1094: "pa-IN",
	1095: "gu-IN",
	1097: "ta-IN",
	1098: "te-IN",
	1099: "kn-IN",
	1102: "mr-IN",
	1103: "sa-IN",
	1104: "mn-MN",
	1110: "gl-ES",
	1111: "kok-IN",
	1114: "syr-SY",
	1125: "div-MV",
	2049: "ar-IQ",
	2052: "zh-CN",
	2055: "de-CH",
	2057: "en-GB",
	2058: "es-MX",
	2060: "fr-BE",
	2064: "it-CH",
	2067: "nl-BE",
	2068: "nn-NO",
	2070: "pt-PT",
	2074: "Lt-sr-SP",
	2077: "sv-FI",
	2092: "Cy-az-AZ",
	2110: "ms-BN",
	2115: "Cy-uz-UZ",
	3073: "ar-EG",
	3076: "zh-HK",
	3079: "de-AT",
	3081: "en-AU",
	3082: "es-ES",
	3084: "fr-CA",
	3098: "Cy-sr-SP",
	4097: "ar-LY",
	4100: "zh-SG",
	4103: "de-LU",
	4105: "en-CA",
	4106: "es-GT",
	4108: "fr-CH",
	5121: "ar-DZ",
	5124: "zh-MO",
	5127: "de-LI",
	5129: "en-NZ",
	5130: "es-CR",
	5132: "fr-LU",
	6145: "ar-MA",
	6153: "en-IE",
	6154: "es-PA",
	6156: "fr-MC",
	7169: "ar-TN",
	7177: "en-ZA",
	7178: "es-DO",
	8193: "ar-OM",
	8201: "en-JM",
	8202: "es-VE",
	9217: "ar-YE",
	9225: "en-CB",
	9226: "es-CO",
	10241: "ar-SY",
	10249: "en-BZ",
	10250: "es-PE",
	11265: "ar-JO",
	11273: "en-TT",
	11274: "es-AR",
	12289: "ar-LB",
	12297: "en-ZW",
	12298: "es-EC",
	13313: "ar-KW",
	13321: "en-PH",
	13322: "es-CL",
	14337: "ar-AE",
	14346: "es-UY",
	15361: "ar-BH",
	15370: "es-PY",
	16385: "ar-QA",
	16394: "es-BO",
	17418: "es-SV",
	18442: "es-HN",
	19466: "es-NI",
	20490: "es-PR",
	31748: "zh-CHT"
};
// Input 19
// Input 20
function $opentype$tables$post$$($dataView$$21_table$$14$$) {
	$dataView$$21_table$$14$$ = new $opentype$Buffer$$($dataView$$21_table$$14$$);
	var $data$$47$$ = $dataView$$21_table$$14$$.$read$($opentype$util$struct$$({
		version: $opentype$Type$FIXED$$,
		italicAngle: $opentype$Type$FIXED$$,
		underlinePosition: $opentype$Type$SHORT$$,
		underlineThickness: $opentype$Type$SHORT$$,
		isFixedPitch: $opentype$Type$ULONG$$,
		minMemType42: $opentype$Type$ULONG$$,
		maxMemType42: $opentype$Type$ULONG$$,
		minMemType1: $opentype$Type$ULONG$$,
		maxMemType1: $opentype$Type$ULONG$$
	}));
	$data$$47$$.glyphNames = {};
	if (0 === $data$$47$$.version) {
		for (var $i$$17$$ = 0; 259 > $i$$17$$; $i$$17$$ += 1) {
			$data$$47$$.glyphNames[$i$$17$$] = $opentype$tables$post$$.$a$[$i$$17$$];
		}
	} else {
		if (2 === $data$$47$$.version) {
			for (var $numberOfGlyphs$$ = $dataView$$21_table$$14$$.$read$($opentype$Type$USHORT$$), $glyphNameIndex$$ = $JSCompiler_StaticMethods_readArray$$($dataView$$21_table$$14$$, $opentype$Type$USHORT$$, $numberOfGlyphs$$), $glyphNames$$ = [].concat($opentype$tables$post$$.$a$), $names$$ = [], $i$$17$$ = 0; $i$$17$$ < $numberOfGlyphs$$; $i$$17$$++) {
				var $index$$46$$ = $glyphNameIndex$$[$i$$17$$];
				258 <= $index$$46$$ && $names$$.push($opentype$util$byteArrayToString$$($JSCompiler_StaticMethods_readArray$$($dataView$$21_table$$14$$, $opentype$Type$CHAR$$, $dataView$$21_table$$14$$.$read$($opentype$Type$BYTE$$))));
			}
			for ($i$$17$$ = 0; $i$$17$$ < $numberOfGlyphs$$; $i$$17$$++) {
				$index$$46$$ = $glyphNameIndex$$[$i$$17$$], $data$$47$$.glyphNames[$i$$17$$] = 258 > $index$$46$$ ? $glyphNames$$[$index$$46$$] : $names$$[$index$$46$$ - 258];
			}
		}
	}
	return $data$$47$$;
}
$opentype$tables$post$$.$a$ = ".notdef .null nonmarkingreturn space exclam quotedbl numbersign dollar percent ampersand quotesingle parenleft parenright asterisk plus comma hyphen period slash zero one two three four five six seven eight nine colon semicolon less equal greater question at A B C D E F G H I J K L M N O P Q R S T U V W X Y Z bracketleft backslash bracketright asciicircum underscore grave a b c d e f g h i j k l m n o p q r s t u v w x y z braceleft bar braceright asciitilde Adieresis Aring Ccedilla Eacute Ntilde Odieresis Udieresis aacute agrave acircumflex adieresis atilde aring ccedilla eacute egrave ecircumflex edieresis iacute igrave icircumflex idieresis ntilde oacute ograve ocircumflex odieresis otilde uacute ugrave ucircumflex udieresis dagger degree cent sterling section bullet paragraph germandbls registered copyright trademark acute dieresis notequal AE Oslash infinity plusminus lessequal greaterequal yen mu partialdiff summation product pi integral ordfeminine ordmasculine Omega ae oslash questiondown exclamdown logicalnot radical florin approxequal Delta guillemotleft guillemotright ellipsis nonbreakingspace Agrave Atilde Otilde OE oe endash emdash quotedblleft quotedblright quoteleft quoteright divide lozenge ydieresis Ydieresis fraction currency guilsinglleft guilsinglright fi fl daggerdbl periodcentered quotesinglbase quotedblbase perthousand Acircumflex Ecircumflex Aacute Edieresis Egrave Iacute Icircumflex Idieresis Igrave Oacute Ocircumflex apple Ograve Uacute Ucircumflex Ugrave dotlessi circumflex tilde macron breve dotaccent ring cedilla hungarumlaut ogonek caron Lslash lslash Scaron scaron Zcaron zcaron brokenbar Eth eth Yacute yacute Thorn thorn minus multiply onesuperior twosuperior threesuperior onehalf onequarter threequarters franc Gbreve gbreve Idotaccent Scedilla scedilla Cacute cacute Ccaron ccaron dcroat".split(" ");
// Input 21
var $opentype$woff$TableDirectory$$ = $opentype$util$struct$$({
		tag: $opentype$Type$TAG$$,
		offset: $opentype$Type$ULONG$$,
		$compLength$: $opentype$Type$ULONG$$,
		$origLength$: $opentype$Type$ULONG$$,
		$f$: $opentype$Type$ULONG$$
	}),
	$opentype$woff$Header$$ = $opentype$util$struct$$({
		signature: $opentype$Type$ULONG$$,
		flavor: $opentype$Type$ULONG$$,
		length: $opentype$Type$ULONG$$,
		numTables: $opentype$Type$USHORT$$,
		reserved: $opentype$Type$USHORT$$,
		totalSfntSize: $opentype$Type$ULONG$$,
		majorVersion: $opentype$Type$USHORT$$,
		minorVersion: $opentype$Type$USHORT$$,
		metaOffset: $opentype$Type$ULONG$$,
		metaLength: $opentype$Type$ULONG$$,
		metaOrigLength: $opentype$Type$ULONG$$,
		privOffset: $opentype$Type$ULONG$$,
		privLength: $opentype$Type$ULONG$$
	});
// Input 22
// Input 23
function $Zlib$Huffman$buildHuffmanTable$$($lengths$$) {
	var $listSize$$ = $lengths$$.length,
		$maxCodeLength$$ = 0,
		$minCodeLength$$ = Number.POSITIVE_INFINITY,
		$size$$11$$, $table$$15$$, $bitLength$$, $code$$1$$, $skip$$, $reversed$$, $rtemp$$, $i$$18$$, $j$$6$$;
	for ($i$$18$$ = 0; $i$$18$$ < $listSize$$; ++$i$$18$$) {
		$lengths$$[$i$$18$$] > $maxCodeLength$$ && ($maxCodeLength$$ = $lengths$$[$i$$18$$]), $lengths$$[$i$$18$$] < $minCodeLength$$ && ($minCodeLength$$ = $lengths$$[$i$$18$$]);
	}
	$size$$11$$ = 1 << $maxCodeLength$$;
	$table$$15$$ = new Uint32Array($size$$11$$);
	$bitLength$$ = 1;
	$code$$1$$ = 0;
	for ($skip$$ = 2; $bitLength$$ <= $maxCodeLength$$;) {
		for ($i$$18$$ = 0; $i$$18$$ < $listSize$$; ++$i$$18$$) {
			if ($lengths$$[$i$$18$$] === $bitLength$$) {
				$reversed$$ = 0;
				$rtemp$$ = $code$$1$$;
				for ($j$$6$$ = 0; $j$$6$$ < $bitLength$$; ++$j$$6$$) {
					$reversed$$ = $reversed$$ << 1 | $rtemp$$ & 1, $rtemp$$ >>= 1;
				}
				for ($j$$6$$ = $reversed$$; $j$$6$$ < $size$$11$$; $j$$6$$ += $skip$$) {
					$table$$15$$[$j$$6$$] = $bitLength$$ << 16 | $i$$18$$;
				}
				++$code$$1$$;
			}
		}
		++$bitLength$$;
		$code$$1$$ <<= 1;
		$skip$$ <<= 1;
	}
	return [$table$$15$$, $maxCodeLength$$, $minCodeLength$$];
};
// Input 24
function $Zlib$RawInflate$$($input$$7$$, $opt_params$$) {
	this.$l$ = [];
	this.bufferSize = 32768;
	this.$f$ = this.$i$ = this.$c$ = this.$o$ = 0;
	this.$h$ = new Uint8Array($input$$7$$);
	this.$u$ = !1;
	this.$bufferType$ = $Zlib$RawInflate$BufferType$ADAPTIVE$$;
	this.$s$ = !1;
	if ($opt_params$$ || !($opt_params$$ = {})) {
		$opt_params$$.index && (this.$c$ = $opt_params$$.index), $opt_params$$.bufferSize && (this.bufferSize = $opt_params$$.bufferSize), $opt_params$$.bufferType && (this.$bufferType$ = $opt_params$$.bufferType), $opt_params$$.resize && (this.$s$ = $opt_params$$.resize);
	}
	switch (this.$bufferType$) {
		case $Zlib$RawInflate$BufferType$BLOCK$$:
			this.$a$ = 32768;
			this.$b$ = new Uint8Array(32768 + this.bufferSize + 258);
			break;
		case $Zlib$RawInflate$BufferType$ADAPTIVE$$:
			this.$a$ = 0;
			this.$b$ = new Uint8Array(this.bufferSize);
			this.$g$ = this.$C$;
			this.$v$ = this.$A$;
			this.$m$ = this.$B$;
			break;
		default:
			throw Error("invalid inflate mode");;
	}
}
var $Zlib$RawInflate$BufferType$BLOCK$$ = 0,
	$Zlib$RawInflate$BufferType$ADAPTIVE$$ = 1,
	$Zlib$RawInflate$Order$$ = new Uint16Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
	$Zlib$RawInflate$LengthCodeTable$$ = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258]),
	$Zlib$RawInflate$LengthExtraTable$$ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4,
		4, 4, 5, 5, 5, 5, 0, 0, 0
	]),
	$Zlib$RawInflate$DistCodeTable$$ = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]),
	$Zlib$RawInflate$DistExtraTable$$ = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
	$lengths$$inline_58$$ = new Uint8Array(288),
	$i$$inline_59$$, $il$$inline_60$$;
$i$$inline_59$$ = 0;
for ($il$$inline_60$$ = $lengths$$inline_58$$.length; $i$$inline_59$$ < $il$$inline_60$$; ++$i$$inline_59$$) {
	$lengths$$inline_58$$[$i$$inline_59$$] = 143 >= $i$$inline_59$$ ? 8 : 255 >= $i$$inline_59$$ ? 9 : 279 >= $i$$inline_59$$ ? 7 : 8;
}
var $Zlib$RawInflate$FixedLiteralLengthTable$$ = $Zlib$Huffman$buildHuffmanTable$$($lengths$$inline_58$$),
	$lengths$$inline_64$$ = new Uint8Array(30),
	$i$$inline_65$$, $il$$inline_66$$;
$i$$inline_65$$ = 0;
for ($il$$inline_66$$ = $lengths$$inline_64$$.length; $i$$inline_65$$ < $il$$inline_66$$; ++$i$$inline_65$$) {
	$lengths$$inline_64$$[$i$$inline_65$$] = 5;
}
var $Zlib$RawInflate$FixedDistanceTable$$ = $Zlib$Huffman$buildHuffmanTable$$($lengths$$inline_64$$);

function $JSCompiler_StaticMethods_readBits$$($JSCompiler_StaticMethods_readBits$self$$, $length$$15$$) {
	for (var $bitsbuf$$ = $JSCompiler_StaticMethods_readBits$self$$.$i$, $bitsbuflen$$ = $JSCompiler_StaticMethods_readBits$self$$.$f$, $input$$8$$ = $JSCompiler_StaticMethods_readBits$self$$.$h$, $ip$$ = $JSCompiler_StaticMethods_readBits$self$$.$c$, $octet$$; $bitsbuflen$$ < $length$$15$$;) {
		$octet$$ = $input$$8$$[$ip$$++];
		if (void 0 === $octet$$) {
			throw Error("input buffer is broken");
		}
		$bitsbuf$$ |= $octet$$ << $bitsbuflen$$;
		$bitsbuflen$$ += 8;
	}
	$octet$$ = $bitsbuf$$ & (1 << $length$$15$$) - 1;
	$JSCompiler_StaticMethods_readBits$self$$.$i$ = $bitsbuf$$ >>> $length$$15$$;
	$JSCompiler_StaticMethods_readBits$self$$.$f$ = $bitsbuflen$$ - $length$$15$$;
	$JSCompiler_StaticMethods_readBits$self$$.$c$ = $ip$$;
	return $octet$$;
}

function $JSCompiler_StaticMethods_readCodeByTable$$($JSCompiler_StaticMethods_readCodeByTable$self$$, $table$$23$$) {
	for (var $bitsbuf$$1$$ = $JSCompiler_StaticMethods_readCodeByTable$self$$.$i$, $bitsbuflen$$1$$ = $JSCompiler_StaticMethods_readCodeByTable$self$$.$f$, $codeWithLength_input$$9$$ = $JSCompiler_StaticMethods_readCodeByTable$self$$.$h$, $ip$$1$$ = $JSCompiler_StaticMethods_readCodeByTable$self$$.$c$, $codeLength_codeTable$$ = $table$$23$$[0], $maxCodeLength$$1$$ = $table$$23$$[1], $octet$$1$$; $bitsbuflen$$1$$ < $maxCodeLength$$1$$;) {
		$octet$$1$$ = $codeWithLength_input$$9$$[$ip$$1$$++];
		if (void 0 === $octet$$1$$) {
			break;
		}
		$bitsbuf$$1$$ |= $octet$$1$$ << $bitsbuflen$$1$$;
		$bitsbuflen$$1$$ += 8;
	}
	$codeWithLength_input$$9$$ = $codeLength_codeTable$$[$bitsbuf$$1$$ & (1 << $maxCodeLength$$1$$) - 1];
	$codeLength_codeTable$$ = $codeWithLength_input$$9$$ >>> 16;
	$JSCompiler_StaticMethods_readCodeByTable$self$$.$i$ = $bitsbuf$$1$$ >> $codeLength_codeTable$$;
	$JSCompiler_StaticMethods_readCodeByTable$self$$.$f$ = $bitsbuflen$$1$$ - $codeLength_codeTable$$;
	$JSCompiler_StaticMethods_readCodeByTable$self$$.$c$ = $ip$$1$$;
	return $codeWithLength_input$$9$$ & 65535;
}

function $JSCompiler_StaticMethods_parseDynamicHuffmanBlock$$($JSCompiler_StaticMethods_parseDynamicHuffmanBlock$self$$) {
	function $decode$$1$$($num$$5$$, $table$$24$$, $lengths$$3$$) {
		var $code$$2_repeat$$, $prev$$, $i$$22$$;
		for ($i$$22$$ = 0; $i$$22$$ < $num$$5$$;) {
			switch ($code$$2_repeat$$ = $JSCompiler_StaticMethods_readCodeByTable$$(this, $table$$24$$), $code$$2_repeat$$) {
				case 16:
					for ($code$$2_repeat$$ = 3 + $JSCompiler_StaticMethods_readBits$$(this, 2); $code$$2_repeat$$--;) {
						$lengths$$3$$[$i$$22$$++] = $prev$$;
					}
					break;
				case 17:
					for ($code$$2_repeat$$ = 3 + $JSCompiler_StaticMethods_readBits$$(this, 3); $code$$2_repeat$$--;) {
						$lengths$$3$$[$i$$22$$++] = 0;
					}
					$prev$$ = 0;
					break;
				case 18:
					for ($code$$2_repeat$$ = 11 + $JSCompiler_StaticMethods_readBits$$(this, 7); $code$$2_repeat$$--;) {
						$lengths$$3$$[$i$$22$$++] = 0;
					}
					$prev$$ = 0;
					break;
				default:
					$prev$$ = $lengths$$3$$[$i$$22$$++] = $code$$2_repeat$$;
			}
		}
		return $lengths$$3$$;
	}
	var $hlit$$ = $JSCompiler_StaticMethods_readBits$$($JSCompiler_StaticMethods_parseDynamicHuffmanBlock$self$$, 5) + 257,
		$hdist$$ = $JSCompiler_StaticMethods_readBits$$($JSCompiler_StaticMethods_parseDynamicHuffmanBlock$self$$, 5) + 1,
		$codeLengthsTable_hclen$$ = $JSCompiler_StaticMethods_readBits$$($JSCompiler_StaticMethods_parseDynamicHuffmanBlock$self$$, 4) + 4,
		$codeLengths_litlenLengths$$ = new Uint8Array($Zlib$RawInflate$Order$$.length),
		$distLengths_i$$21$$;
	for ($distLengths_i$$21$$ = 0; $distLengths_i$$21$$ < $codeLengthsTable_hclen$$; ++$distLengths_i$$21$$) {
		$codeLengths_litlenLengths$$[$Zlib$RawInflate$Order$$[$distLengths_i$$21$$]] = $JSCompiler_StaticMethods_readBits$$($JSCompiler_StaticMethods_parseDynamicHuffmanBlock$self$$, 3);
	}
	$codeLengthsTable_hclen$$ = $Zlib$Huffman$buildHuffmanTable$$($codeLengths_litlenLengths$$);
	$codeLengths_litlenLengths$$ = new Uint8Array($hlit$$);
	$distLengths_i$$21$$ = new Uint8Array($hdist$$);
	$JSCompiler_StaticMethods_parseDynamicHuffmanBlock$self$$.$m$($Zlib$Huffman$buildHuffmanTable$$($decode$$1$$.call($JSCompiler_StaticMethods_parseDynamicHuffmanBlock$self$$, $hlit$$, $codeLengthsTable_hclen$$, $codeLengths_litlenLengths$$)), $Zlib$Huffman$buildHuffmanTable$$($decode$$1$$.call($JSCompiler_StaticMethods_parseDynamicHuffmanBlock$self$$, $hdist$$, $codeLengthsTable_hclen$$, $distLengths_i$$21$$)));
}
$Zlib$RawInflate$$.prototype.$m$ = function $$Zlib$RawInflate$$$$$m$$($litlen$$, $dist$$) {
	var $output$$3$$ = this.$b$,
		$op$$1$$ = this.$a$;
	this.$w$ = $litlen$$;
	for (var $olength$$1$$ = $output$$3$$.length - 258, $code$$3_ti$$, $codeDist$$, $codeLength$$1$$; 256 !== ($code$$3_ti$$ = $JSCompiler_StaticMethods_readCodeByTable$$(this, $litlen$$));) {
		if (256 > $code$$3_ti$$) {
			$op$$1$$ >= $olength$$1$$ && (this.$a$ = $op$$1$$, $output$$3$$ = this.$g$(), $op$$1$$ = this.$a$), $output$$3$$[$op$$1$$++] = $code$$3_ti$$;
		} else {
			for ($code$$3_ti$$ -= 257, $codeLength$$1$$ = $Zlib$RawInflate$LengthCodeTable$$[$code$$3_ti$$], 0 < $Zlib$RawInflate$LengthExtraTable$$[$code$$3_ti$$] && ($codeLength$$1$$ += $JSCompiler_StaticMethods_readBits$$(this, $Zlib$RawInflate$LengthExtraTable$$[$code$$3_ti$$])), $code$$3_ti$$ = $JSCompiler_StaticMethods_readCodeByTable$$(this, $dist$$), $codeDist$$ = $Zlib$RawInflate$DistCodeTable$$[$code$$3_ti$$], 0 < $Zlib$RawInflate$DistExtraTable$$[$code$$3_ti$$] && ($codeDist$$ += $JSCompiler_StaticMethods_readBits$$(this,
					$Zlib$RawInflate$DistExtraTable$$[$code$$3_ti$$])), $op$$1$$ >= $olength$$1$$ && (this.$a$ = $op$$1$$, $output$$3$$ = this.$g$(), $op$$1$$ = this.$a$); $codeLength$$1$$--;) {
				$output$$3$$[$op$$1$$] = $output$$3$$[$op$$1$$++-$codeDist$$];
			}
		}
	}
	for (; 8 <= this.$f$;) {
		this.$f$ -= 8, this.$c$--;
	}
	this.$a$ = $op$$1$$;
};
$Zlib$RawInflate$$.prototype.$B$ = function $$Zlib$RawInflate$$$$$B$$($litlen$$1$$, $dist$$1$$) {
	var $output$$4$$ = this.$b$,
		$op$$2$$ = this.$a$;
	this.$w$ = $litlen$$1$$;
	for (var $olength$$2$$ = $output$$4$$.length, $code$$4_ti$$1$$, $codeDist$$1$$, $codeLength$$2$$; 256 !== ($code$$4_ti$$1$$ = $JSCompiler_StaticMethods_readCodeByTable$$(this, $litlen$$1$$));) {
		if (256 > $code$$4_ti$$1$$) {
			$op$$2$$ >= $olength$$2$$ && ($output$$4$$ = this.$g$(), $olength$$2$$ = $output$$4$$.length), $output$$4$$[$op$$2$$++] = $code$$4_ti$$1$$;
		} else {
			for ($code$$4_ti$$1$$ -= 257, $codeLength$$2$$ = $Zlib$RawInflate$LengthCodeTable$$[$code$$4_ti$$1$$], 0 < $Zlib$RawInflate$LengthExtraTable$$[$code$$4_ti$$1$$] && ($codeLength$$2$$ += $JSCompiler_StaticMethods_readBits$$(this, $Zlib$RawInflate$LengthExtraTable$$[$code$$4_ti$$1$$])), $code$$4_ti$$1$$ = $JSCompiler_StaticMethods_readCodeByTable$$(this, $dist$$1$$), $codeDist$$1$$ = $Zlib$RawInflate$DistCodeTable$$[$code$$4_ti$$1$$], 0 < $Zlib$RawInflate$DistExtraTable$$[$code$$4_ti$$1$$] &&
				($codeDist$$1$$ += $JSCompiler_StaticMethods_readBits$$(this, $Zlib$RawInflate$DistExtraTable$$[$code$$4_ti$$1$$])), $op$$2$$ + $codeLength$$2$$ > $olength$$2$$ && ($output$$4$$ = this.$g$(), $olength$$2$$ = $output$$4$$.length); $codeLength$$2$$--;) {
				$output$$4$$[$op$$2$$] = $output$$4$$[$op$$2$$++-$codeDist$$1$$];
			}
		}
	}
	for (; 8 <= this.$f$;) {
		this.$f$ -= 8, this.$c$--;
	}
	this.$a$ = $op$$2$$;
};
$Zlib$RawInflate$$.prototype.$g$ = function $$Zlib$RawInflate$$$$$g$$() {
	var $buffer$$17$$ = new Uint8Array(this.$a$ - 32768),
		$backward$$ = this.$a$ - 32768,
		$output$$5$$ = this.$b$;
	$buffer$$17$$.set($output$$5$$.subarray(32768, $buffer$$17$$.length));
	this.$l$.push($buffer$$17$$);
	this.$o$ += $buffer$$17$$.length;
	$output$$5$$.set($output$$5$$.subarray($backward$$, $backward$$ + 32768));
	this.$a$ = 32768;
	return $output$$5$$;
};
$Zlib$RawInflate$$.prototype.$C$ = function $$Zlib$RawInflate$$$$$C$$($buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$) {
	var $ratio$$ = this.$h$.length / this.$c$ + 1 | 0,
		$input$$11$$ = this.$h$,
		$output$$6$$ = this.$b$;
	$buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$ && ("number" === typeof $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$.$fixRatio$ && ($ratio$$ = $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$.$fixRatio$), "number" === typeof $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$.$addRatio$ && ($ratio$$ += $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$.$addRatio$));
	2 > $ratio$$ ? ($buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$ = ($input$$11$$.length - this.$c$) / this.$w$[2], $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$ = $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$ / 2 * 258 | 0, $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$ = $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$ < $output$$6$$.length ? $output$$6$$.length + $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$ :
		$output$$6$$.length << 1) : $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$ = $output$$6$$.length * $ratio$$;
	$buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$ = new Uint8Array($buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$);
	$buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$.set($output$$6$$);
	return this.$b$ = $buffer$$18_maxHuffCode_maxInflateSize_newSize_opt_param$$1$$;
};
$Zlib$RawInflate$$.prototype.$v$ = function $$Zlib$RawInflate$$$$$v$$() {
	var $pos$$ = 0,
		$output$$7$$ = this.$b$,
		$blocks$$ = this.$l$,
		$block$$, $buffer$$19$$ = new Uint8Array(this.$o$ + (this.$a$ - 32768)),
		$i$$24$$, $il$$4$$, $j$$7$$, $jl$$1$$;
	if (0 === $blocks$$.length) {
		return this.$b$.subarray(32768, this.$a$);
	}
	$i$$24$$ = 0;
	for ($il$$4$$ = $blocks$$.length; $i$$24$$ < $il$$4$$; ++$i$$24$$) {
		for ($block$$ = $blocks$$[$i$$24$$], $j$$7$$ = 0, $jl$$1$$ = $block$$.length; $j$$7$$ < $jl$$1$$; ++$j$$7$$) {
			$buffer$$19$$[$pos$$++] = $block$$[$j$$7$$];
		}
	}
	$i$$24$$ = 32768;
	for ($il$$4$$ = this.$a$; $i$$24$$ < $il$$4$$; ++$i$$24$$) {
		$buffer$$19$$[$pos$$++] = $output$$7$$[$i$$24$$];
	}
	this.$l$ = [];
	return this.$j$ = $buffer$$19$$;
};
$Zlib$RawInflate$$.prototype.$A$ = function $$Zlib$RawInflate$$$$$A$$() {
	var $buffer$$20$$, $op$$3$$ = this.$a$;
	this.$s$ ? ($buffer$$20$$ = new Uint8Array($op$$3$$), $buffer$$20$$.set(this.$b$.subarray(0, $op$$3$$))) : $buffer$$20$$ = this.$b$.subarray(0, $op$$3$$);
	return this.$j$ = $buffer$$20$$;
};
// Input 25
// Input 26
// Input 27
function $Zlib$Inflate$$($input$$12$$, $opt_params$$1$$) {
	var $cmf$$, $flg$$;
	this.$c$ = $input$$12$$;
	this.$a$ = 0;
	if ($opt_params$$1$$ || !($opt_params$$1$$ = {})) {
		$opt_params$$1$$.index && (this.$a$ = $opt_params$$1$$.index), $opt_params$$1$$.verify && (this.$f$ = $opt_params$$1$$.verify);
	}
	$cmf$$ = $input$$12$$[this.$a$++];
	$flg$$ = $input$$12$$[this.$a$++];
	switch ($cmf$$ & 15) {
		case $Zlib$CompressionMethod$DEFLATE$$:
			break;
		default:
			throw Error("unsupported compression method");;
	}
	if (0 !== (($cmf$$ << 8) + $flg$$) % 31) {
		throw Error("invalid fcheck flag:" + (($cmf$$ << 8) + $flg$$) % 31);
	}
	if ($flg$$ & 32) {
		throw Error("fdict flag is not supported");
	}
	this.$b$ = new $Zlib$RawInflate$$($input$$12$$, {
		index: this.$a$,
		bufferSize: $opt_params$$1$$.bufferSize,
		bufferType: $opt_params$$1$$.bufferType,
		resize: $opt_params$$1$$.resize
	});
};
// Input 28
var $Zlib$CompressionMethod$DEFLATE$$ = 8;
// Input 29
var $opentype$table$$ = {
	cmap: function($dataView$$11_header$$2_index$$45$$) {
		var $table$$ = new $opentype$Buffer$$($dataView$$11_header$$2_index$$45$$),
			$data$$33$$ = {};
		$dataView$$11_header$$2_index$$45$$ = $table$$.$read$($opentype$util$struct$$({
			version: $opentype$Type$USHORT$$,
			$numTables$: $opentype$Type$USHORT$$
		}));
		$dataView$$11_header$$2_index$$45$$ = $JSCompiler_StaticMethods_readArray$$($table$$, $opentype$util$struct$$({
			$platformID$: $opentype$Type$USHORT$$,
			$encodingID$: $opentype$Type$USHORT$$,
			offset: $opentype$Type$ULONG$$
		}), $dataView$$11_header$$2_index$$45$$.$numTables$);
		$data$$33$$.charCode = {};
		$data$$33$$.glyph = [];
		$dataView$$11_header$$2_index$$45$$.forEach(function($format$$11_i$$10_subTable$$) {
			var $segCount_subData$$ = {};
			$table$$.$opentype_Buffer$byteOffset$ = $format$$11_i$$10_subTable$$.offset;
			$format$$11_i$$10_subTable$$ = $table$$.$read$($opentype$Type$USHORT$$, $format$$11_i$$10_subTable$$.offset);
			if (0 === $format$$11_i$$10_subTable$$) {
				var $segCount_subData$$ = $table$$.$read$($opentype$util$struct$$({
						format: $opentype$Type$USHORT$$,
						length: $opentype$Type$USHORT$$,
						language: $opentype$Type$USHORT$$
					})),
					$charCode_glyphIdArray$$ = $JSCompiler_StaticMethods_readArray$$($table$$, $opentype$Type$BYTE$$, 256);
				$charCode_glyphIdArray$$.forEach(function($id$$5$$) {
					$data$$33$$.charCode[$id$$5$$] = $id$$5$$;
					$data$$33$$.glyph[$id$$5$$] = $id$$5$$;
				});
			} else {
				if (4 === $format$$11_i$$10_subTable$$) {
					var $segCount_subData$$ = $table$$.$read$($opentype$util$struct$$({
							format: $opentype$Type$USHORT$$,
							length: $opentype$Type$USHORT$$,
							language: $opentype$Type$USHORT$$,
							$segCountX2$: $opentype$Type$USHORT$$,
							$h$: $opentype$Type$USHORT$$,
							$c$: $opentype$Type$USHORT$$,
							$g$: $opentype$Type$USHORT$$
						})),
						$segCount_subData$$ = $segCount_subData$$.$segCountX2$ / 2,
						$endCount_groups$$ = $JSCompiler_StaticMethods_readArray$$($table$$, $opentype$Type$USHORT$$, $segCount_subData$$);
					$table$$.$read$($opentype$Type$USHORT$$);
					var $startCount$$ = $JSCompiler_StaticMethods_readArray$$($table$$, $opentype$Type$USHORT$$, $segCount_subData$$),
						$idDelta$$ = $JSCompiler_StaticMethods_readArray$$($table$$, $opentype$Type$SHORT$$, $segCount_subData$$),
						$idRangeTableOffset$$ = $table$$.$opentype_Buffer$byteOffset$,
						$idRangeOffset$$ = $JSCompiler_StaticMethods_readArray$$($table$$, $opentype$Type$USHORT$$, $segCount_subData$$),
						$charCode_glyphIdArray$$ = [];
					for ($format$$11_i$$10_subTable$$ = 0; $format$$11_i$$10_subTable$$ < $segCount_subData$$; $format$$11_i$$10_subTable$$ += 1) {
						for (var $start$$6$$ = $startCount$$[$format$$11_i$$10_subTable$$], $end$$3$$ = $endCount_groups$$[$format$$11_i$$10_subTable$$], $delta$$1$$ = $idDelta$$[$format$$11_i$$10_subTable$$], $rangeOffset$$ = $idRangeOffset$$[$format$$11_i$$10_subTable$$], $offset$$14$$ = $idRangeTableOffset$$ + $format$$11_i$$10_subTable$$ * $opentype$Type$USHORT$$.$sizeof$, $j$$1$$ = $start$$6$$; $j$$1$$ <= $end$$3$$; $j$$1$$ += 1) {
							var $charCode_glyphIdArray$$ = $j$$1$$,
								$id$$4$$ = null,
								$id$$4$$ = 0 === $rangeOffset$$ ? ($charCode_glyphIdArray$$ + $delta$$1$$) % 65536 : ($table$$.$read$($opentype$Type$USHORT$$, $offset$$14$$ + $rangeOffset$$ + ($charCode_glyphIdArray$$ - $start$$6$$) * $opentype$Type$USHORT$$.$sizeof$) + $delta$$1$$) % 65536;
							$data$$33$$.charCode[$charCode_glyphIdArray$$] = $id$$4$$;
							$data$$33$$.glyph[$id$$4$$] = $charCode_glyphIdArray$$;
						}
					}
				} else {
					if (12 === $format$$11_i$$10_subTable$$) {
						for ($segCount_subData$$ = $table$$.$read$($opentype$util$struct$$({
								format: $opentype$Type$USHORT$$,
								$a$: $opentype$Type$USHORT$$,
								length: $opentype$Type$ULONG$$,
								language: $opentype$Type$ULONG$$,
								$nGroups$: $opentype$Type$ULONG$$
							})), $endCount_groups$$ = $JSCompiler_StaticMethods_readArray$$($table$$, $opentype$util$struct$$({
								$startCharCode$: $opentype$Type$ULONG$$,
								$endCharCode$: $opentype$Type$ULONG$$,
								$glyphID$: $opentype$Type$ULONG$$
							}), $segCount_subData$$.$nGroups$), $format$$11_i$$10_subTable$$ =
							0; $format$$11_i$$10_subTable$$ < $segCount_subData$$.$nGroups$; $format$$11_i$$10_subTable$$ += 1) {
							for ($start$$6$$ = $endCount_groups$$[$format$$11_i$$10_subTable$$].$startCharCode$, $end$$3$$ = $endCount_groups$$[$format$$11_i$$10_subTable$$].$endCharCode$, $id$$4$$ = $endCount_groups$$[$format$$11_i$$10_subTable$$].$glyphID$; $charCode_glyphIdArray$$ <= $end$$3$$; $charCode_glyphIdArray$$ += 1, $id$$4$$++) {
								$data$$33$$.charCode[$charCode_glyphIdArray$$] = $id$$4$$, $data$$33$$.glyph[$id$$4$$] = $charCode_glyphIdArray$$;
							}
						}
					} else {
						if (13 === $format$$11_i$$10_subTable$$) {
							for ($segCount_subData$$ = $table$$.$read$($opentype$util$struct$$({
									format: $opentype$Type$USHORT$$,
									$a$: $opentype$Type$USHORT$$,
									length: $opentype$Type$ULONG$$,
									language: $opentype$Type$ULONG$$,
									$nGroups$: $opentype$Type$ULONG$$
								})), $endCount_groups$$ = $JSCompiler_StaticMethods_readArray$$($table$$, $opentype$util$struct$$({
									$startCharCode$: $opentype$Type$ULONG$$,
									$endCharCode$: $opentype$Type$ULONG$$,
									$glyphID$: $opentype$Type$ULONG$$
								}), $segCount_subData$$.$nGroups$), $format$$11_i$$10_subTable$$ =
								0; $format$$11_i$$10_subTable$$ < $segCount_subData$$.$nGroups$; $format$$11_i$$10_subTable$$ += 1) {
								for ($start$$6$$ = $endCount_groups$$[$format$$11_i$$10_subTable$$].$startCharCode$, $end$$3$$ = $endCount_groups$$[$format$$11_i$$10_subTable$$].$endCharCode$, $j$$1$$ = $start$$6$$; $j$$1$$ <= $end$$3$$; $j$$1$$ += 1) {
									$charCode_glyphIdArray$$ = $j$$1$$, $id$$4$$ = $endCount_groups$$[$format$$11_i$$10_subTable$$].$glyphID$, $data$$33$$.charCode[$charCode_glyphIdArray$$] = $id$$4$$, $data$$33$$.glyph[$id$$4$$] = $charCode_glyphIdArray$$;
								}
							}
						}
					}
				}
			}
		});
		return $data$$33$$;
	},
	head: function($dataView$$15$$) {
		return (new $opentype$Buffer$$($dataView$$15$$)).$read$($opentype$util$struct$$({
			version: $opentype$Type$FIXED$$,
			fontRevision: $opentype$Type$FIXED$$,
			checkSumAdjustment: $opentype$Type$ULONG$$,
			magicNumber: $opentype$Type$ULONG$$,
			flags: $opentype$Type$USHORT$$,
			unitsPerEm: $opentype$Type$USHORT$$,
			created: $opentype$Type$LONGDATETIME$$,
			modified: $opentype$Type$LONGDATETIME$$,
			xMin: $opentype$Type$SHORT$$,
			yMin: $opentype$Type$SHORT$$,
			xMax: $opentype$Type$SHORT$$,
			yMax: $opentype$Type$SHORT$$,
			macStyle: $opentype$Type$USHORT$$,
			lowestRecPPEM: $opentype$Type$USHORT$$,
			fontDirectionHint: $opentype$Type$SHORT$$,
			indexToLocFormat: $opentype$Type$SHORT$$,
			glyphDataFormat: $opentype$Type$SHORT$$
		}));
	},
	hhea: function($dataView$$16$$) {
		return (new $opentype$Buffer$$($dataView$$16$$)).$read$($opentype$util$struct$$({
			version: $opentype$Type$FIXED$$,
			Ascender: $opentype$Type$SHORT$$,
			Descender: $opentype$Type$SHORT$$,
			LineGap: $opentype$Type$SHORT$$,
			advanceWidthMax: $opentype$Type$USHORT$$,
			minLeftSideBearing: $opentype$Type$SHORT$$,
			minRightSideBearing: $opentype$Type$SHORT$$,
			xMaxExtent: $opentype$Type$SHORT$$,
			caretSlopeRise: $opentype$Type$SHORT$$,
			caretOffset: $opentype$Type$SHORT$$,
			reserved1: $opentype$Type$SHORT$$,
			reserved2: $opentype$Type$SHORT$$,
			reserved3: $opentype$Type$SHORT$$,
			reserved4: $opentype$Type$SHORT$$,
			metricDataFormat: $opentype$Type$SHORT$$,
			numberOfHMetrics: $opentype$Type$USHORT$$
		}));
	},
	maxp: function($dataView$$18_table$$11$$) {
		$dataView$$18_table$$11$$ = new $opentype$Buffer$$($dataView$$18_table$$11$$);
		var $data$$44$$ = $dataView$$18_table$$11$$.$read$($opentype$util$struct$$({
			version: $opentype$Type$FIXED$$,
			numGlyphs: $opentype$Type$USHORT$$
		}));
		1 === $data$$44$$.version && $opentype$util$extend$$($data$$44$$, $dataView$$18_table$$11$$.$read$($opentype$util$struct$$({
			maxPoints: $opentype$Type$USHORT$$,
			maxContours: $opentype$Type$USHORT$$,
			maxCompositePoints: $opentype$Type$USHORT$$,
			maxCompositeContours: $opentype$Type$USHORT$$,
			maxZones: $opentype$Type$USHORT$$,
			maxTwilightPoints: $opentype$Type$USHORT$$,
			maxStorage: $opentype$Type$USHORT$$,
			maxFunctionDefs: $opentype$Type$USHORT$$,
			maxInstructionDefs: $opentype$Type$USHORT$$,
			maxStackElements: $opentype$Type$USHORT$$,
			maxSizeOfInstructions: $opentype$Type$USHORT$$,
			maxComponentElements: $opentype$Type$USHORT$$,
			maxComponentDepth: $opentype$Type$USHORT$$
		})));
		return $data$$44$$;
	},
	hmtx: function($dataView$$17$$, $font$$9$$) {
		var $table$$10$$ = new $opentype$Buffer$$($dataView$$17$$),
			$numGlyphs$$ = $font$$9$$.tables.maxp.numGlyphs,
			$data$$43$$ = {};
		$data$$43$$.hMetrics = $JSCompiler_StaticMethods_readArray$$($table$$10$$, $opentype$util$struct$$({
			advanceWidth: $opentype$Type$USHORT$$,
			lsb: $opentype$Type$SHORT$$
		}), $font$$9$$.tables.hhea.numberOfHMetrics);
		$data$$43$$.leftSideBearing = $JSCompiler_StaticMethods_readArray$$($table$$10$$, $opentype$Type$SHORT$$, $numGlyphs$$);
		return $data$$43$$;
	},
	name: $opentype$tables$name$$,
	"OS/2": function($dataView$$20_table$$13$$) {
		$dataView$$20_table$$13$$ = new $opentype$Buffer$$($dataView$$20_table$$13$$);
		var $data$$46$$ = {};
		$opentype$util$extend$$($data$$46$$, $dataView$$20_table$$13$$.$read$($opentype$util$struct$$({
			version: $opentype$Type$USHORT$$,
			xAvgCharWidth: $opentype$Type$SHORT$$,
			usWeightClass: $opentype$Type$USHORT$$,
			usWidthClass: $opentype$Type$USHORT$$,
			fsType: $opentype$Type$USHORT$$,
			ySubscriptXSize: $opentype$Type$SHORT$$,
			ySubscriptYSize: $opentype$Type$SHORT$$,
			ySubscriptXOffset: $opentype$Type$SHORT$$,
			ySubscriptYOffset: $opentype$Type$SHORT$$,
			ySuperscriptXSize: $opentype$Type$SHORT$$,
			ySuperscriptYSize: $opentype$Type$SHORT$$,
			ySuperscriptXOffset: $opentype$Type$SHORT$$,
			ySuperscriptYOffset: $opentype$Type$SHORT$$,
			yStrikeoutSize: $opentype$Type$SHORT$$,
			yStrikeoutPosition: $opentype$Type$SHORT$$,
			sFamilyClass: $opentype$Type$SHORT$$
		})));
		$data$$46$$.panose = $dataView$$20_table$$13$$.$read$($opentype$util$struct$$({
			bFamilyType: $opentype$Type$BYTE$$,
			bSerifStyle: $opentype$Type$BYTE$$,
			bWeight: $opentype$Type$BYTE$$,
			bProportion: $opentype$Type$BYTE$$,
			bContrast: $opentype$Type$BYTE$$,
			bStrokeVariation: $opentype$Type$BYTE$$,
			bArmStyle: $opentype$Type$BYTE$$,
			bLetterform: $opentype$Type$BYTE$$,
			bMidline: $opentype$Type$BYTE$$,
			bXHeight: $opentype$Type$BYTE$$
		}));
		$opentype$util$extend$$($data$$46$$, $dataView$$20_table$$13$$.$read$($opentype$util$struct$$({
			ulUnicodeRange1: $opentype$Type$ULONG$$,
			ulUnicodeRange2: $opentype$Type$ULONG$$,
			ulUnicodeRange3: $opentype$Type$ULONG$$,
			ulUnicodeRange4: $opentype$Type$ULONG$$
		})));
		$data$$46$$.achVendID = $JSCompiler_StaticMethods_readArray$$($dataView$$20_table$$13$$, $opentype$Type$CHAR$$, 4);
		$opentype$util$extend$$($data$$46$$, $dataView$$20_table$$13$$.$read$($opentype$util$struct$$({
			fsSelection: $opentype$Type$USHORT$$,
			usFirstCharIndex: $opentype$Type$USHORT$$,
			usLastCharIndex: $opentype$Type$USHORT$$,
			sTypoAscender: $opentype$Type$SHORT$$,
			sTypoDescender: $opentype$Type$SHORT$$,
			sTypoLineGap: $opentype$Type$SHORT$$,
			usWinAscent: $opentype$Type$USHORT$$,
			usWinDescent: $opentype$Type$USHORT$$
		})));
		1 <= $data$$46$$.version && $opentype$util$extend$$($data$$46$$, $dataView$$20_table$$13$$.$read$($opentype$util$struct$$({
			ulCodePageRange1: $opentype$Type$ULONG$$,
			ulCodePageRange2: $opentype$Type$ULONG$$
		})));
		2 <= $data$$46$$.version && $opentype$util$extend$$($data$$46$$, $dataView$$20_table$$13$$.$read$($opentype$util$struct$$({
			sxHeight: $opentype$Type$SHORT$$,
			sCapHeight: $opentype$Type$SHORT$$,
			usDefaultChar: $opentype$Type$USHORT$$,
			usBreakChar: $opentype$Type$USHORT$$,
			usMaxContext: $opentype$Type$USHORT$$
		})));
		return $data$$46$$;
	},
	post: $opentype$tables$post$$,
	GSUB: $opentype$tables$gsub$$,
	GDEF: $opentype$tables$gdef$$,
	gasp: function($dataView$$12_table$$4$$) {
		$dataView$$12_table$$4$$ = new $opentype$Buffer$$($dataView$$12_table$$4$$);
		$dataView$$12_table$$4$$.$read$($opentype$Type$USHORT$$);
		var $data$$39$$ = {};
		$data$$39$$.gaspRange = $JSCompiler_StaticMethods_readArray$$($dataView$$12_table$$4$$, $opentype$util$struct$$({
			rangeMaxPPEM: $opentype$Type$USHORT$$,
			rangeGaspBehavior: $opentype$Type$USHORT$$
		}), $dataView$$12_table$$4$$.$read$($opentype$Type$USHORT$$));
		return $data$$39$$;
	}
};

function $opt_object$$inline_102$$($arrayBuffer$$) {
	var $buffer$$22_index$$47$$ = new $opentype$Buffer$$(new DataView($arrayBuffer$$)),
		$font$$14$$ = {
			tables: {}
		},
		$signature$$1$$ = $buffer$$22_index$$47$$.$read$($opentype$Type$ULONG$$, 0);
	if (2001684038 === $signature$$1$$) {
		$font$$14$$.header = $buffer$$22_index$$47$$.$read$($opentype$woff$Header$$), $buffer$$22_index$$47$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$22_index$$47$$, $opentype$woff$TableDirectory$$, $font$$14$$.header.numTables), $buffer$$22_index$$47$$.forEach(function($JSCompiler_temp_const$$10_table$$26$$) {
			var $tag$$ = $JSCompiler_temp_const$$10_table$$26$$.tag;
			if ($JSCompiler_temp_const$$10_table$$26$$.$compLength$ !== $JSCompiler_temp_const$$10_table$$26$$.$origLength$) {
				var $JSCompiler_temp_const$$9_compressedData$$ = new Uint8Array($arrayBuffer$$, $JSCompiler_temp_const$$10_table$$26$$.offset, $opentype$util$pad$$($JSCompiler_temp_const$$10_table$$26$$.$compLength$)),
					$adler32$$inline_89_inflate$$ = new $Zlib$Inflate$$($JSCompiler_temp_const$$9_compressedData$$, {
						bufferSize: $JSCompiler_temp_const$$10_table$$26$$.$origLength$,
						$bufferType$: $Zlib$RawInflate$BufferType$BLOCK$$
					});
				$JSCompiler_temp_const$$10_table$$26$$ = $font$$14$$.tables;
				var $JSCompiler_temp_const$$9_compressedData$$ = DataView,
					$array$$inline_99_input$$inline_87_tmp$$inline_123$$ = $adler32$$inline_89_inflate$$.$c$,
					$JSCompiler_StaticMethods_Zlib_RawInflate_prototype$decompress$self$$inline_97_buffer$$inline_88$$;
				for ($JSCompiler_StaticMethods_Zlib_RawInflate_prototype$decompress$self$$inline_97_buffer$$inline_88$$ = $adler32$$inline_89_inflate$$.$b$; !$JSCompiler_StaticMethods_Zlib_RawInflate_prototype$decompress$self$$inline_97_buffer$$inline_88$$.$u$;) {
					var $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$ = $JSCompiler_StaticMethods_Zlib_RawInflate_prototype$decompress$self$$inline_97_buffer$$inline_88$$,
						$hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$ = $JSCompiler_StaticMethods_readBits$$($JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$, 3);
					$hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$ & 1 && ($JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$u$ = !0);
					$hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$ >>>= 1;
					switch ($hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$) {
						case 0:
							var $hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$ = $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$h$,
								$ip$$inline_113_len$$inline_130$$ = $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$c$,
								$output$$inline_114_tlen$$inline_131$$ = $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$b$,
								$i$$inline_132_op$$inline_115$$ = $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$a$,
								$octet$$inline_116_preCopy$$inline_120$$ = void 0,
								$len$$inline_117$$ = void 0,
								$nlen$$inline_118$$ = void 0,
								$olength$$inline_119$$ = $output$$inline_114_tlen$$inline_131$$.length,
								$octet$$inline_116_preCopy$$inline_120$$ = void 0;
							$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$i$ = 0;
							$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$f$ = 0;
							$octet$$inline_116_preCopy$$inline_120$$ = $hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$[$ip$$inline_113_len$$inline_130$$++];
							if (void 0 === $octet$$inline_116_preCopy$$inline_120$$) {
								throw Error("invalid uncompressed block header: LEN (first byte)");
							}
							$len$$inline_117$$ = $octet$$inline_116_preCopy$$inline_120$$;
							$octet$$inline_116_preCopy$$inline_120$$ = $hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$[$ip$$inline_113_len$$inline_130$$++];
							if (void 0 === $octet$$inline_116_preCopy$$inline_120$$) {
								throw Error("invalid uncompressed block header: LEN (second byte)");
							}
							$len$$inline_117$$ |= $octet$$inline_116_preCopy$$inline_120$$ << 8;
							$octet$$inline_116_preCopy$$inline_120$$ = $hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$[$ip$$inline_113_len$$inline_130$$++];
							if (void 0 === $octet$$inline_116_preCopy$$inline_120$$) {
								throw Error("invalid uncompressed block header: NLEN (first byte)");
							}
							$nlen$$inline_118$$ = $octet$$inline_116_preCopy$$inline_120$$;
							$octet$$inline_116_preCopy$$inline_120$$ = $hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$[$ip$$inline_113_len$$inline_130$$++];
							if (void 0 === $octet$$inline_116_preCopy$$inline_120$$) {
								throw Error("invalid uncompressed block header: NLEN (second byte)");
							}
							$nlen$$inline_118$$ |= $octet$$inline_116_preCopy$$inline_120$$ << 8;
							if ($len$$inline_117$$ === ~$nlen$$inline_118$$) {
								throw Error("invalid uncompressed block header: length verify");
							}
							if ($ip$$inline_113_len$$inline_130$$ + $len$$inline_117$$ > $hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$.length) {
								throw Error("input buffer is broken");
							}
							switch ($JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$bufferType$) {
								case $Zlib$RawInflate$BufferType$BLOCK$$:
									for (; $i$$inline_132_op$$inline_115$$ + $len$$inline_117$$ > $output$$inline_114_tlen$$inline_131$$.length;) {
										$octet$$inline_116_preCopy$$inline_120$$ = $olength$$inline_119$$ - $i$$inline_132_op$$inline_115$$, $len$$inline_117$$ -= $octet$$inline_116_preCopy$$inline_120$$, $output$$inline_114_tlen$$inline_131$$.set($hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$.subarray($ip$$inline_113_len$$inline_130$$, $ip$$inline_113_len$$inline_130$$ + $octet$$inline_116_preCopy$$inline_120$$), $i$$inline_132_op$$inline_115$$), $i$$inline_132_op$$inline_115$$ += $octet$$inline_116_preCopy$$inline_120$$,
											$ip$$inline_113_len$$inline_130$$ += $octet$$inline_116_preCopy$$inline_120$$, $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$a$ = $i$$inline_132_op$$inline_115$$, $output$$inline_114_tlen$$inline_131$$ = $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$g$(), $i$$inline_132_op$$inline_115$$ = $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$a$;
									}
									break;
								case $Zlib$RawInflate$BufferType$ADAPTIVE$$:
									for (; $i$$inline_132_op$$inline_115$$ + $len$$inline_117$$ > $output$$inline_114_tlen$$inline_131$$.length;) {
										$output$$inline_114_tlen$$inline_131$$ = $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$g$({
											$fixRatio$: 2
										});
									}
									break;
								default:
									throw Error("invalid inflate mode");;
							}
							$output$$inline_114_tlen$$inline_131$$.set($hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$.subarray($ip$$inline_113_len$$inline_130$$, $ip$$inline_113_len$$inline_130$$ + $len$$inline_117$$), $i$$inline_132_op$$inline_115$$);
							$i$$inline_132_op$$inline_115$$ += $len$$inline_117$$;
							$ip$$inline_113_len$$inline_130$$ += $len$$inline_117$$;
							$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$c$ = $ip$$inline_113_len$$inline_130$$;
							$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$a$ = $i$$inline_132_op$$inline_115$$;
							$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$b$ = $output$$inline_114_tlen$$inline_131$$;
							break;
						case 1:
							$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$.$m$($Zlib$RawInflate$FixedLiteralLengthTable$$, $Zlib$RawInflate$FixedDistanceTable$$);
							break;
						case 2:
							$JSCompiler_StaticMethods_parseDynamicHuffmanBlock$$($JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$);
							break;
						default:
							throw Error("unknown BTYPE: " + $hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$);;
					}
				}
				$JSCompiler_StaticMethods_Zlib_RawInflate_prototype$decompress$self$$inline_97_buffer$$inline_88$$ = $JSCompiler_StaticMethods_Zlib_RawInflate_prototype$decompress$self$$inline_97_buffer$$inline_88$$.$v$();
				$adler32$$inline_89_inflate$$.$a$ = $adler32$$inline_89_inflate$$.$b$.$c$;
				if ($adler32$$inline_89_inflate$$.$f$) {
					$adler32$$inline_89_inflate$$ = ($array$$inline_99_input$$inline_87_tmp$$inline_123$$[$adler32$$inline_89_inflate$$.$a$++] << 24 | $array$$inline_99_input$$inline_87_tmp$$inline_123$$[$adler32$$inline_89_inflate$$.$a$++] << 16 | $array$$inline_99_input$$inline_87_tmp$$inline_123$$[$adler32$$inline_89_inflate$$.$a$++] << 8 | $array$$inline_99_input$$inline_87_tmp$$inline_123$$[$adler32$$inline_89_inflate$$.$a$++]) >>> 0;
					$array$$inline_99_input$$inline_87_tmp$$inline_123$$ = $JSCompiler_StaticMethods_Zlib_RawInflate_prototype$decompress$self$$inline_97_buffer$$inline_88$$;
					if ("string" === typeof $array$$inline_99_input$$inline_87_tmp$$inline_123$$) {
						for ($array$$inline_99_input$$inline_87_tmp$$inline_123$$ = $array$$inline_99_input$$inline_87_tmp$$inline_123$$.split(""), $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$ = 0, $hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$ = $array$$inline_99_input$$inline_87_tmp$$inline_123$$.length; $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$ < $hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$; $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$++) {
							$array$$inline_99_input$$inline_87_tmp$$inline_123$$[$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$] = ($array$$inline_99_input$$inline_87_tmp$$inline_123$$[$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$].charCodeAt(0) & 255) >>> 0;
						}
					}
					$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$ = 1;
					$hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$ = 0;
					$ip$$inline_113_len$$inline_130$$ = $array$$inline_99_input$$inline_87_tmp$$inline_123$$.length;
					for ($i$$inline_132_op$$inline_115$$ = 0; 0 < $ip$$inline_113_len$$inline_130$$;) {
						$output$$inline_114_tlen$$inline_131$$ = 1024 < $ip$$inline_113_len$$inline_130$$ ? 1024 : $ip$$inline_113_len$$inline_130$$;
						$ip$$inline_113_len$$inline_130$$ -= $output$$inline_114_tlen$$inline_131$$;
						do {
							$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$ += $array$$inline_99_input$$inline_87_tmp$$inline_123$$[$i$$inline_132_op$$inline_115$$++], $hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$ += $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$;
						} while (--$output$$inline_114_tlen$$inline_131$$);
						$JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$ %= 65521;
						$hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$ %= 65521;
					}
					if ($adler32$$inline_89_inflate$$ !== ($hdr$$inline_111_il$$inline_125_input$$inline_112_s2$$inline_129$$ << 16 | $JSCompiler_StaticMethods_parseBlock$self$$inline_110_i$$inline_124_s1$$inline_128$$) >>> 0) {
						throw Error("invalid adler-32 checksum");
					}
				}
				$JSCompiler_temp_const$$10_table$$26$$[$tag$$] = new $JSCompiler_temp_const$$9_compressedData$$($JSCompiler_StaticMethods_Zlib_RawInflate_prototype$decompress$self$$inline_97_buffer$$inline_88$$.buffer);
			} else {
				$font$$14$$.tables[$tag$$] = new DataView($arrayBuffer$$, $JSCompiler_temp_const$$10_table$$26$$.offset, $opentype$util$pad$$($JSCompiler_temp_const$$10_table$$26$$.$origLength$));
			}
		});
	} else {
		if (65536 === $signature$$1$$ || 1330926671 === $signature$$1$$) {
			$font$$14$$.header = $buffer$$22_index$$47$$.$read$($opentype$sfnt$Header$$), $buffer$$22_index$$47$$ = $JSCompiler_StaticMethods_readArray$$($buffer$$22_index$$47$$, $opentype$sfnt$OffsetTable$$, $font$$14$$.header.numTables), $buffer$$22_index$$47$$.forEach(function($table$$27$$) {
				$font$$14$$.tables[$table$$27$$.tag] = new DataView($arrayBuffer$$, $table$$27$$.offset, $opentype$util$pad$$($table$$27$$.length));
			});
		}
	}
	for (var $table$$25$$ in $opentype$table$$) {
		$font$$14$$.tables[$table$$25$$] && ($font$$14$$.tables[$table$$25$$] = $opentype$table$$[$table$$25$$]($font$$14$$.tables[$table$$25$$], $font$$14$$));
	}
	return $font$$14$$;
}
var $parts$$inline_104$$ = ["opentype", "parse"],
	$cur$$inline_105$$ = $goog$global$$;

$parts$$inline_104$$[0] in $cur$$inline_105$$ || !$cur$$inline_105$$.execScript || $cur$$inline_105$$.execScript("var " + $parts$$inline_104$$[0]);

for (var $part$$inline_106$$; $parts$$inline_104$$.length && ($part$$inline_106$$ = $parts$$inline_104$$.shift());) {
	$parts$$inline_104$$.length || void 0 === $opt_object$$inline_102$$ ? $cur$$inline_105$$[$part$$inline_106$$] ? $cur$$inline_105$$ = $cur$$inline_105$$[$part$$inline_106$$] : $cur$$inline_105$$ = $cur$$inline_105$$[$part$$inline_106$$] = {} : $cur$$inline_105$$[$part$$inline_106$$] = $opt_object$$inline_102$$;
};

module.exports = $goog$global$$.opentype;
