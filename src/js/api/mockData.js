const mockData = {
    pokemon: {
        "forms": [{
            "url": "http://pokeapi.co/api/v2/pokemon-form/79/",
            "name": "slowpoke"
        }],
        "abilities": [{
            "slot": 3,
            "is_hidden": true,
            "ability": {
                "url": "http://pokeapi.co/api/v2/ability/144/",
                "name": "regenerator"
            }
        }, {
            "slot": 2,
            "is_hidden": false,
            "ability": {
                "url": "http://pokeapi.co/api/v2/ability/20/",
                "name": "own-tempo"
            }
        }, {
            "slot": 1,
            "is_hidden": false,
            "ability": {
                "url": "http://pokeapi.co/api/v2/ability/12/",
                "name": "oblivious"
            }
        }],
        "stats": [{
            "stat": {
                "url": "http://pokeapi.co/api/v2/stat/6/",
                "name": "speed"
            },
            "effort": 0,
            "base_stat": 15
        }, {
            "stat": {
                "url": "http://pokeapi.co/api/v2/stat/5/",
                "name": "special-defense"
            },
            "effort": 0,
            "base_stat": 40
        }, {
            "stat": {
                "url": "http://pokeapi.co/api/v2/stat/4/",
                "name": "special-attack"
            },
            "effort": 0,
            "base_stat": 40
        }, {
            "stat": {
                "url": "http://pokeapi.co/api/v2/stat/3/",
                "name": "defense"
            },
            "effort": 0,
            "base_stat": 65
        }, {
            "stat": {
                "url": "http://pokeapi.co/api/v2/stat/2/",
                "name": "attack"
            },
            "effort": 0,
            "base_stat": 65
        }, {
            "stat": {
                "url": "http://pokeapi.co/api/v2/stat/1/",
                "name": "hp"
            },
            "effort": 1,
            "base_stat": 90
        }],
        "name": "slowpoke",
        "weight": 360,
        "moves": [{
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/6/",
                "name": "pay-day"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/23/",
                "name": "stomp"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 23,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 23,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 23,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 25,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 25,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 25,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 23,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 22,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 22,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/29/",
                "name": "headbutt"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/33/",
                "name": "tackle"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/34/",
                "name": "body-slam"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/36/",
                "name": "take-down"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/38/",
                "name": "double-edge"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 5,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 5,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 5,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 6,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 6,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 5,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 6,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 6,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 6,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 6,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 6,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 6,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 6,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 6,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 27,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 27,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/45/",
                "name": "growl"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 19,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 24,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 18,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 18,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/50/",
                "name": "disable"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/53/",
                "name": "flamethrower"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 9,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 9,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 9,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 15,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 15,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 9,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 11,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 11,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 11,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 13,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 15,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 15,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 15,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 15,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 33,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 33,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/55/",
                "name": "water-gun"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/57/",
                "name": "surf"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/58/",
                "name": "ice-beam"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/59/",
                "name": "blizzard"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/61/",
                "name": "bubble-beam"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/70/",
                "name": "strength"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/86/",
                "name": "thunder-wave"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/89/",
                "name": "earthquake"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/90/",
                "name": "fissure"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/91/",
                "name": "dig"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/92/",
                "name": "toxic"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 14,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 14,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 14,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 14,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 15,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 15,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 15,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 17,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 20,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/93/",
                "name": "confusion"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 45,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 45,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 45,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 45,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 40,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 48,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/94/",
                "name": "psychic"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/99/",
                "name": "rage"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/100/",
                "name": "teleport"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/102/",
                "name": "mimic"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/104/",
                "name": "double-team"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/113/",
                "name": "light-screen"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/115/",
                "name": "reflect"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/117/",
                "name": "bide"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/126/",
                "name": "fire-blast"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/129/",
                "name": "swift"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/130/",
                "name": "skull-bash"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 41,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 41,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 41,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 43,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 43,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 41,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 43,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 43,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 43,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 36,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 43,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 43,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 43,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 43,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 40,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 40,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/133/",
                "name": "amnesia"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/138/",
                "name": "dream-eater"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/148/",
                "name": "flash"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/149/",
                "name": "psywave"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/156/",
                "name": "rest"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/161/",
                "name": "tri-attack"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/2/",
                    "name": "yellow"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/1/",
                    "name": "red-blue"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/164/",
                "name": "substitute"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/171/",
                "name": "nightmare"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/173/",
                "name": "snore"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/174/",
                "name": "curse"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/182/",
                "name": "protect"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/187/",
                "name": "belly-drum"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/189/",
                "name": "mud-slap"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/192/",
                "name": "zap-cannon"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/196/",
                "name": "icy-wind"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/203/",
                "name": "endure"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/207/",
                "name": "swagger"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/213/",
                "name": "attract"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/214/",
                "name": "sleep-talk"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/216/",
                "name": "return"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/218/",
                "name": "frustration"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/219/",
                "name": "safeguard"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/231/",
                "name": "iron-tail"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/237/",
                "name": "hidden-power"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 49,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 49,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 49,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 53,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 53,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 53,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 49,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/240/",
                "name": "rain-dance"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/241/",
                "name": "sunny-day"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 54,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 54,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 54,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 57,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 57,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 57,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 54,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 47,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/244/",
                "name": "psych-up"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/247/",
                "name": "shadow-ball"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/4/",
                    "name": "crystal"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/3/",
                    "name": "gold-silver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/248/",
                "name": "future-sight"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/250/",
                "name": "whirlpool"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/258/",
                "name": "hail"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/263/",
                "name": "facade"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/271/",
                "name": "trick"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/277/",
                "name": "magic-coat"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/278/",
                "name": "recycle"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 1,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/281/",
                "name": "yawn"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/285/",
                "name": "skill-swap"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/290/",
                "name": "secret-power"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/291/",
                "name": "dive"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/300/",
                "name": "mud-sport"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 36,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 36,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 36,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 39,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 39,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 39,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 36,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/303/",
                "name": "slack-off"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/324/",
                "name": "signal-beam"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/335/",
                "name": "block"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/347/",
                "name": "calm-mind"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 28,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 28,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/13/",
                    "name": "xd"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/12/",
                    "name": "colosseum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 28,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 29,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/7/",
                    "name": "firered-leafgreen"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 28,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/6/",
                    "name": "emerald"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/5/",
                    "name": "ruby-sapphire"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/352/",
                "name": "water-pulse"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/362/",
                "name": "brine"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/363/",
                "name": "natural-gift"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/382/",
                "name": "me-first"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/401/",
                "name": "aqua-tail"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 32,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 32,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 32,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 32,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 34,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/428/",
                "name": "zen-headbutt"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/433/",
                "name": "trick-room"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/445/",
                "name": "captivate"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/10/",
                    "name": "heartgold-soulsilver"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/9/",
                    "name": "platinum"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/8/",
                    "name": "diamond-pearl"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/447/",
                "name": "grass-knot"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/472/",
                "name": "wonder-room"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/473/",
                "name": "psyshock"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/477/",
                "name": "telekinesis"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/3/",
                    "name": "tutor"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/495/",
                "name": "after-you"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/496/",
                "name": "round"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/497/",
                "name": "echoed-voice"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/503/",
                "name": "scald"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 58,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 58,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 58,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/1/",
                    "name": "level-up"
                },
                "level_learned_at": 58,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/505/",
                "name": "heal-pulse"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/510/",
                "name": "incinerate"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/11/",
                    "name": "black-white"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/14/",
                    "name": "black-2-white-2"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/523/",
                "name": "bulldoze"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/2/",
                    "name": "egg"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/562/",
                "name": "belch"
            }
        }, {
            "version_group_details": [{
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/16/",
                    "name": "omega-ruby-alpha-sapphire"
                }
            }, {
                "move_learn_method": {
                    "url": "http://pokeapi.co/api/v2/move-learn-method/4/",
                    "name": "machine"
                },
                "level_learned_at": 0,
                "version_group": {
                    "url": "http://pokeapi.co/api/v2/version-group/15/",
                    "name": "x-y"
                }
            }],
            "move": {
                "url": "http://pokeapi.co/api/v2/move/590/",
                "name": "confide"
            }
        }],
        "sprites": {
            "back_female": null,
            "back_shiny_female": null,
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/79.png",
            "front_female": null,
            "front_shiny_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/79.png",
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/79.png"
        },
        "held_items": [{
            "item": {
                "url": "http://pokeapi.co/api/v2/item/198/",
                "name": "kings-rock"
            },
            "version_details": [{
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/9/",
                    "name": "emerald"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/8/",
                    "name": "sapphire"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/7/",
                    "name": "ruby"
                },
                "rarity": 5
            }]
        }, {
            "item": {
                "url": "http://pokeapi.co/api/v2/item/256/",
                "name": "lagging-tail"
            },
            "version_details": [{
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/24/",
                    "name": "y"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/23/",
                    "name": "x"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/22/",
                    "name": "white-2"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/21/",
                    "name": "black-2"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/18/",
                    "name": "white"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/17/",
                    "name": "black"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/16/",
                    "name": "soulsilver"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/15/",
                    "name": "heartgold"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/14/",
                    "name": "platinum"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/13/",
                    "name": "pearl"
                },
                "rarity": 5
            }, {
                "version": {
                    "url": "http://pokeapi.co/api/v2/version/12/",
                    "name": "diamond"
                },
                "rarity": 5
            }]
        }],
        "location_area_encounters": "/api/v2/pokemon/79/encounters",
        "height": 12,
        "is_default": true,
        "species": {
            "url": "http://pokeapi.co/api/v2/pokemon-species/79/",
            "name": "slowpoke"
        },
        "id": 79,
        "order": 98,
        "game_indices": [{
            "version": {
                "url": "http://pokeapi.co/api/v2/version/22/",
                "name": "white-2"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/21/",
                "name": "black-2"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/18/",
                "name": "white"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/17/",
                "name": "black"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/16/",
                "name": "soulsilver"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/15/",
                "name": "heartgold"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/14/",
                "name": "platinum"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/13/",
                "name": "pearl"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/12/",
                "name": "diamond"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/11/",
                "name": "leafgreen"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/10/",
                "name": "firered"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/9/",
                "name": "emerald"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/8/",
                "name": "sapphire"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/7/",
                "name": "ruby"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/6/",
                "name": "crystal"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/5/",
                "name": "silver"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/4/",
                "name": "gold"
            },
            "game_index": 79
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/3/",
                "name": "yellow"
            },
            "game_index": 37
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/2/",
                "name": "blue"
            },
            "game_index": 37
        }, {
            "version": {
                "url": "http://pokeapi.co/api/v2/version/1/",
                "name": "red"
            },
            "game_index": 37
        }],
        "base_experience": 63,
        "types": [{
            "slot": 2,
            "type": {
                "url": "http://pokeapi.co/api/v2/type/14/",
                "name": "psychic"
            }
        }, {
            "slot": 1,
            "type": {
                "url": "http://pokeapi.co/api/v2/type/11/",
                "name": "water"
            }
        }]
    },
    pokemonList: {
        "count": 811,
        "previous": null,
        "results": [{
            "url": "http://pokeapi.co/api/v2/pokemon/1/",
            "name": "bulbasaur"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/2/",
            "name": "ivysaur"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/3/",
            "name": "venusaur"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/4/",
            "name": "charmander"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/5/",
            "name": "charmeleon"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/6/",
            "name": "charizard"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/7/",
            "name": "squirtle"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/8/",
            "name": "wartortle"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/9/",
            "name": "blastoise"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/10/",
            "name": "caterpie"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/11/",
            "name": "metapod"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/12/",
            "name": "butterfree"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/13/",
            "name": "weedle"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/14/",
            "name": "kakuna"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/15/",
            "name": "beedrill"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/16/",
            "name": "pidgey"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/17/",
            "name": "pidgeotto"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/18/",
            "name": "pidgeot"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/19/",
            "name": "rattata"
        }, {
            "url": "http://pokeapi.co/api/v2/pokemon/20/",
            "name": "raticate"
        }],
        "next": "http://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
    },
    pokemonTypes: {
        psychic: {
            "name": "psychic",
            "generation": {
                "url": "http://pokeapi.co/api/v2/generation/1/",
                "name": "generation-i"
            },
            "damage_relations": {
                "half_damage_from": [{
                    "url": "http://pokeapi.co/api/v2/type/2/",
                    "name": "fighting"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/14/",
                    "name": "psychic"
                }],
                "no_damage_from": [],
                "half_damage_to": [{
                    "url": "http://pokeapi.co/api/v2/type/9/",
                    "name": "steel"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/14/",
                    "name": "psychic"
                }],
                "double_damage_from": [{
                    "url": "http://pokeapi.co/api/v2/type/7/",
                    "name": "bug"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/8/",
                    "name": "ghost"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/17/",
                    "name": "dark"
                }],
                "no_damage_to": [{
                    "url": "http://pokeapi.co/api/v2/type/17/",
                    "name": "dark"
                }],
                "double_damage_to": [{
                    "url": "http://pokeapi.co/api/v2/type/2/",
                    "name": "fighting"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/4/",
                    "name": "poison"
                }]
            },
            "game_indices": [{
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/1/",
                    "name": "generation-i"
                },
                "game_index": 24
            }, {
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/2/",
                    "name": "generation-ii"
                },
                "game_index": 24
            }, {
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/3/",
                    "name": "generation-iii"
                },
                "game_index": 14
            }, {
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/4/",
                    "name": "generation-iv"
                },
                "game_index": 14
            }, {
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/5/",
                    "name": "generation-v"
                },
                "game_index": 13
            }, {
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/6/",
                    "name": "generation-vi"
                },
                "game_index": 13
            }],
            "move_damage_class": {
                "url": "http://pokeapi.co/api/v2/move-damage-class/3/",
                "name": "special"
            },
            "moves": [{
                "url": "http://pokeapi.co/api/v2/move/60/",
                "name": "psybeam"
            }, {
                "url": "http://pokeapi.co/api/v2/move/93/",
                "name": "confusion"
            }, {
                "url": "http://pokeapi.co/api/v2/move/94/",
                "name": "psychic"
            }, {
                "url": "http://pokeapi.co/api/v2/move/95/",
                "name": "hypnosis"
            }, {
                "url": "http://pokeapi.co/api/v2/move/96/",
                "name": "meditate"
            }, {
                "url": "http://pokeapi.co/api/v2/move/97/",
                "name": "agility"
            }, {
                "url": "http://pokeapi.co/api/v2/move/100/",
                "name": "teleport"
            }, {
                "url": "http://pokeapi.co/api/v2/move/112/",
                "name": "barrier"
            }, {
                "url": "http://pokeapi.co/api/v2/move/113/",
                "name": "light-screen"
            }, {
                "url": "http://pokeapi.co/api/v2/move/115/",
                "name": "reflect"
            }, {
                "url": "http://pokeapi.co/api/v2/move/133/",
                "name": "amnesia"
            }, {
                "url": "http://pokeapi.co/api/v2/move/134/",
                "name": "kinesis"
            }, {
                "url": "http://pokeapi.co/api/v2/move/138/",
                "name": "dream-eater"
            }, {
                "url": "http://pokeapi.co/api/v2/move/149/",
                "name": "psywave"
            }, {
                "url": "http://pokeapi.co/api/v2/move/156/",
                "name": "rest"
            }, {
                "url": "http://pokeapi.co/api/v2/move/243/",
                "name": "mirror-coat"
            }, {
                "url": "http://pokeapi.co/api/v2/move/248/",
                "name": "future-sight"
            }, {
                "url": "http://pokeapi.co/api/v2/move/271/",
                "name": "trick"
            }, {
                "url": "http://pokeapi.co/api/v2/move/272/",
                "name": "role-play"
            }, {
                "url": "http://pokeapi.co/api/v2/move/277/",
                "name": "magic-coat"
            }, {
                "url": "http://pokeapi.co/api/v2/move/285/",
                "name": "skill-swap"
            }, {
                "url": "http://pokeapi.co/api/v2/move/286/",
                "name": "imprison"
            }, {
                "url": "http://pokeapi.co/api/v2/move/295/",
                "name": "luster-purge"
            }, {
                "url": "http://pokeapi.co/api/v2/move/296/",
                "name": "mist-ball"
            }, {
                "url": "http://pokeapi.co/api/v2/move/322/",
                "name": "cosmic-power"
            }, {
                "url": "http://pokeapi.co/api/v2/move/326/",
                "name": "extrasensory"
            }, {
                "url": "http://pokeapi.co/api/v2/move/347/",
                "name": "calm-mind"
            }, {
                "url": "http://pokeapi.co/api/v2/move/354/",
                "name": "psycho-boost"
            }, {
                "url": "http://pokeapi.co/api/v2/move/356/",
                "name": "gravity"
            }, {
                "url": "http://pokeapi.co/api/v2/move/357/",
                "name": "miracle-eye"
            }, {
                "url": "http://pokeapi.co/api/v2/move/361/",
                "name": "healing-wish"
            }, {
                "url": "http://pokeapi.co/api/v2/move/375/",
                "name": "psycho-shift"
            }, {
                "url": "http://pokeapi.co/api/v2/move/377/",
                "name": "heal-block"
            }, {
                "url": "http://pokeapi.co/api/v2/move/379/",
                "name": "power-trick"
            }, {
                "url": "http://pokeapi.co/api/v2/move/384/",
                "name": "power-swap"
            }, {
                "url": "http://pokeapi.co/api/v2/move/385/",
                "name": "guard-swap"
            }, {
                "url": "http://pokeapi.co/api/v2/move/391/",
                "name": "heart-swap"
            }, {
                "url": "http://pokeapi.co/api/v2/move/427/",
                "name": "psycho-cut"
            }, {
                "url": "http://pokeapi.co/api/v2/move/428/",
                "name": "zen-headbutt"
            }, {
                "url": "http://pokeapi.co/api/v2/move/433/",
                "name": "trick-room"
            }, {
                "url": "http://pokeapi.co/api/v2/move/461/",
                "name": "lunar-dance"
            }, {
                "url": "http://pokeapi.co/api/v2/move/470/",
                "name": "guard-split"
            }, {
                "url": "http://pokeapi.co/api/v2/move/471/",
                "name": "power-split"
            }, {
                "url": "http://pokeapi.co/api/v2/move/472/",
                "name": "wonder-room"
            }, {
                "url": "http://pokeapi.co/api/v2/move/473/",
                "name": "psyshock"
            }, {
                "url": "http://pokeapi.co/api/v2/move/477/",
                "name": "telekinesis"
            }, {
                "url": "http://pokeapi.co/api/v2/move/478/",
                "name": "magic-room"
            }, {
                "url": "http://pokeapi.co/api/v2/move/485/",
                "name": "synchronoise"
            }, {
                "url": "http://pokeapi.co/api/v2/move/500/",
                "name": "stored-power"
            }, {
                "url": "http://pokeapi.co/api/v2/move/502/",
                "name": "ally-switch"
            }, {
                "url": "http://pokeapi.co/api/v2/move/505/",
                "name": "heal-pulse"
            }, {
                "url": "http://pokeapi.co/api/v2/move/531/",
                "name": "heart-stamp"
            }, {
                "url": "http://pokeapi.co/api/v2/move/540/",
                "name": "psystrike"
            }, {
                "url": "http://pokeapi.co/api/v2/move/593/",
                "name": "hyperspace-hole"
            }],
            "pokemon": [{
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/63/",
                    "name": "abra"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/64/",
                    "name": "kadabra"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/65/",
                    "name": "alakazam"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/79/",
                    "name": "slowpoke"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/80/",
                    "name": "slowbro"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/96/",
                    "name": "drowzee"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/97/",
                    "name": "hypno"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/102/",
                    "name": "exeggcute"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/103/",
                    "name": "exeggutor"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/121/",
                    "name": "starmie"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/122/",
                    "name": "mr-mime"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/124/",
                    "name": "jynx"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/150/",
                    "name": "mewtwo"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/151/",
                    "name": "mew"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/177/",
                    "name": "natu"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/178/",
                    "name": "xatu"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/196/",
                    "name": "espeon"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/199/",
                    "name": "slowking"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/201/",
                    "name": "unown"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/202/",
                    "name": "wobbuffet"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/203/",
                    "name": "girafarig"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/238/",
                    "name": "smoochum"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/249/",
                    "name": "lugia"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/251/",
                    "name": "celebi"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/280/",
                    "name": "ralts"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/281/",
                    "name": "kirlia"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/282/",
                    "name": "gardevoir"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/307/",
                    "name": "meditite"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/308/",
                    "name": "medicham"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/325/",
                    "name": "spoink"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/326/",
                    "name": "grumpig"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/337/",
                    "name": "lunatone"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/338/",
                    "name": "solrock"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/343/",
                    "name": "baltoy"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/344/",
                    "name": "claydol"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/358/",
                    "name": "chimecho"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/360/",
                    "name": "wynaut"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/374/",
                    "name": "beldum"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/375/",
                    "name": "metang"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/376/",
                    "name": "metagross"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/380/",
                    "name": "latias"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/381/",
                    "name": "latios"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/385/",
                    "name": "jirachi"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/386/",
                    "name": "deoxys-normal"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/433/",
                    "name": "chingling"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/436/",
                    "name": "bronzor"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/437/",
                    "name": "bronzong"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/439/",
                    "name": "mime-jr"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/475/",
                    "name": "gallade"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/480/",
                    "name": "uxie"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/481/",
                    "name": "mesprit"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/482/",
                    "name": "azelf"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/488/",
                    "name": "cresselia"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/494/",
                    "name": "victini"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/517/",
                    "name": "munna"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/518/",
                    "name": "musharna"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/527/",
                    "name": "woobat"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/528/",
                    "name": "swoobat"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/561/",
                    "name": "sigilyph"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/574/",
                    "name": "gothita"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/575/",
                    "name": "gothorita"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/576/",
                    "name": "gothitelle"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/577/",
                    "name": "solosis"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/578/",
                    "name": "duosion"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/579/",
                    "name": "reuniclus"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/605/",
                    "name": "elgyem"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/606/",
                    "name": "beheeyem"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/648/",
                    "name": "meloetta-aria"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/655/",
                    "name": "delphox"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/677/",
                    "name": "espurr"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/678/",
                    "name": "meowstic-male"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/686/",
                    "name": "inkay"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/687/",
                    "name": "malamar"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/720/",
                    "name": "hoopa"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10001/",
                    "name": "deoxys-attack"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10002/",
                    "name": "deoxys-defense"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10003/",
                    "name": "deoxys-speed"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10017/",
                    "name": "darmanitan-zen"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10025/",
                    "name": "meowstic-female"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10037/",
                    "name": "alakazam-mega"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10043/",
                    "name": "mewtwo-mega-x"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10044/",
                    "name": "mewtwo-mega-y"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10051/",
                    "name": "gardevoir-mega"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10054/",
                    "name": "medicham-mega"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10062/",
                    "name": "latias-mega"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10063/",
                    "name": "latios-mega"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10068/",
                    "name": "gallade-mega"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10071/",
                    "name": "slowbro-mega"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10076/",
                    "name": "metagross-mega"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10086/",
                    "name": "hoopa-unbound"
                }
            }],
            "id": 14,
            "names": [{
                "name": "エスパー",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/1/",
                    "name": "ja"
                }
            }, {
                "name": "에스퍼",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/3/",
                    "name": "ko"
                }
            }, {
                "name": "Psy",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/5/",
                    "name": "fr"
                }
            }, {
                "name": "Psycho",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/6/",
                    "name": "de"
                }
            }, {
                "name": "Psíquico",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/7/",
                    "name": "es"
                }
            }, {
                "name": "Psico",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/8/",
                    "name": "it"
                }
            }, {
                "name": "Psychic",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/9/",
                    "name": "en"
                }
            }]
        },
        water: {
            "name": "water",
            "generation": {
                "url": "http://pokeapi.co/api/v2/generation/1/",
                "name": "generation-i"
            },
            "damage_relations": {
                "half_damage_from": [{
                    "url": "http://pokeapi.co/api/v2/type/9/",
                    "name": "steel"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/10/",
                    "name": "fire"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/11/",
                    "name": "water"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/15/",
                    "name": "ice"
                }],
                "no_damage_from": [],
                "half_damage_to": [{
                    "url": "http://pokeapi.co/api/v2/type/11/",
                    "name": "water"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/12/",
                    "name": "grass"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/16/",
                    "name": "dragon"
                }],
                "double_damage_from": [{
                    "url": "http://pokeapi.co/api/v2/type/12/",
                    "name": "grass"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/13/",
                    "name": "electric"
                }],
                "no_damage_to": [],
                "double_damage_to": [{
                    "url": "http://pokeapi.co/api/v2/type/5/",
                    "name": "ground"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/6/",
                    "name": "rock"
                }, {
                    "url": "http://pokeapi.co/api/v2/type/10/",
                    "name": "fire"
                }]
            },
            "game_indices": [{
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/1/",
                    "name": "generation-i"
                },
                "game_index": 21
            }, {
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/2/",
                    "name": "generation-ii"
                },
                "game_index": 21
            }, {
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/3/",
                    "name": "generation-iii"
                },
                "game_index": 11
            }, {
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/4/",
                    "name": "generation-iv"
                },
                "game_index": 11
            }, {
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/5/",
                    "name": "generation-v"
                },
                "game_index": 10
            }, {
                "generation": {
                    "url": "http://pokeapi.co/api/v2/generation/6/",
                    "name": "generation-vi"
                },
                "game_index": 10
            }],
            "move_damage_class": {
                "url": "http://pokeapi.co/api/v2/move-damage-class/3/",
                "name": "special"
            },
            "moves": [{
                "url": "http://pokeapi.co/api/v2/move/55/",
                "name": "water-gun"
            }, {
                "url": "http://pokeapi.co/api/v2/move/56/",
                "name": "hydro-pump"
            }, {
                "url": "http://pokeapi.co/api/v2/move/57/",
                "name": "surf"
            }, {
                "url": "http://pokeapi.co/api/v2/move/61/",
                "name": "bubble-beam"
            }, {
                "url": "http://pokeapi.co/api/v2/move/110/",
                "name": "withdraw"
            }, {
                "url": "http://pokeapi.co/api/v2/move/127/",
                "name": "waterfall"
            }, {
                "url": "http://pokeapi.co/api/v2/move/128/",
                "name": "clamp"
            }, {
                "url": "http://pokeapi.co/api/v2/move/145/",
                "name": "bubble"
            }, {
                "url": "http://pokeapi.co/api/v2/move/152/",
                "name": "crabhammer"
            }, {
                "url": "http://pokeapi.co/api/v2/move/190/",
                "name": "octazooka"
            }, {
                "url": "http://pokeapi.co/api/v2/move/240/",
                "name": "rain-dance"
            }, {
                "url": "http://pokeapi.co/api/v2/move/250/",
                "name": "whirlpool"
            }, {
                "url": "http://pokeapi.co/api/v2/move/291/",
                "name": "dive"
            }, {
                "url": "http://pokeapi.co/api/v2/move/308/",
                "name": "hydro-cannon"
            }, {
                "url": "http://pokeapi.co/api/v2/move/323/",
                "name": "water-spout"
            }, {
                "url": "http://pokeapi.co/api/v2/move/330/",
                "name": "muddy-water"
            }, {
                "url": "http://pokeapi.co/api/v2/move/346/",
                "name": "water-sport"
            }, {
                "url": "http://pokeapi.co/api/v2/move/352/",
                "name": "water-pulse"
            }, {
                "url": "http://pokeapi.co/api/v2/move/362/",
                "name": "brine"
            }, {
                "url": "http://pokeapi.co/api/v2/move/392/",
                "name": "aqua-ring"
            }, {
                "url": "http://pokeapi.co/api/v2/move/401/",
                "name": "aqua-tail"
            }, {
                "url": "http://pokeapi.co/api/v2/move/453/",
                "name": "aqua-jet"
            }, {
                "url": "http://pokeapi.co/api/v2/move/487/",
                "name": "soak"
            }, {
                "url": "http://pokeapi.co/api/v2/move/503/",
                "name": "scald"
            }, {
                "url": "http://pokeapi.co/api/v2/move/518/",
                "name": "water-pledge"
            }, {
                "url": "http://pokeapi.co/api/v2/move/534/",
                "name": "razor-shell"
            }, {
                "url": "http://pokeapi.co/api/v2/move/592/",
                "name": "steam-eruption"
            }, {
                "url": "http://pokeapi.co/api/v2/move/594/",
                "name": "water-shuriken"
            }, {
                "url": "http://pokeapi.co/api/v2/move/618/",
                "name": "origin-pulse"
            }],
            "pokemon": [{
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/7/",
                    "name": "squirtle"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/8/",
                    "name": "wartortle"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/9/",
                    "name": "blastoise"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/54/",
                    "name": "psyduck"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/55/",
                    "name": "golduck"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/60/",
                    "name": "poliwag"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/61/",
                    "name": "poliwhirl"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/62/",
                    "name": "poliwrath"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/72/",
                    "name": "tentacool"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/73/",
                    "name": "tentacruel"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/79/",
                    "name": "slowpoke"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/80/",
                    "name": "slowbro"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/86/",
                    "name": "seel"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/87/",
                    "name": "dewgong"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/90/",
                    "name": "shellder"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/91/",
                    "name": "cloyster"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/98/",
                    "name": "krabby"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/99/",
                    "name": "kingler"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/116/",
                    "name": "horsea"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/117/",
                    "name": "seadra"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/118/",
                    "name": "goldeen"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/119/",
                    "name": "seaking"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/120/",
                    "name": "staryu"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/121/",
                    "name": "starmie"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/129/",
                    "name": "magikarp"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/130/",
                    "name": "gyarados"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/131/",
                    "name": "lapras"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/134/",
                    "name": "vaporeon"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/138/",
                    "name": "omanyte"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/139/",
                    "name": "omastar"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/140/",
                    "name": "kabuto"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/141/",
                    "name": "kabutops"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/158/",
                    "name": "totodile"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/159/",
                    "name": "croconaw"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/160/",
                    "name": "feraligatr"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/170/",
                    "name": "chinchou"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/171/",
                    "name": "lanturn"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/183/",
                    "name": "marill"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/184/",
                    "name": "azumarill"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/186/",
                    "name": "politoed"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/194/",
                    "name": "wooper"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/195/",
                    "name": "quagsire"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/199/",
                    "name": "slowking"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/211/",
                    "name": "qwilfish"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/222/",
                    "name": "corsola"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/223/",
                    "name": "remoraid"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/224/",
                    "name": "octillery"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/226/",
                    "name": "mantine"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/230/",
                    "name": "kingdra"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/245/",
                    "name": "suicune"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/258/",
                    "name": "mudkip"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/259/",
                    "name": "marshtomp"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/260/",
                    "name": "swampert"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/270/",
                    "name": "lotad"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/271/",
                    "name": "lombre"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/272/",
                    "name": "ludicolo"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/278/",
                    "name": "wingull"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/279/",
                    "name": "pelipper"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/283/",
                    "name": "surskit"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/318/",
                    "name": "carvanha"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/319/",
                    "name": "sharpedo"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/320/",
                    "name": "wailmer"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/321/",
                    "name": "wailord"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/339/",
                    "name": "barboach"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/340/",
                    "name": "whiscash"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/341/",
                    "name": "corphish"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/342/",
                    "name": "crawdaunt"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/349/",
                    "name": "feebas"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/350/",
                    "name": "milotic"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/363/",
                    "name": "spheal"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/364/",
                    "name": "sealeo"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/365/",
                    "name": "walrein"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/366/",
                    "name": "clamperl"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/367/",
                    "name": "huntail"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/368/",
                    "name": "gorebyss"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/369/",
                    "name": "relicanth"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/370/",
                    "name": "luvdisc"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/382/",
                    "name": "kyogre"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/393/",
                    "name": "piplup"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/394/",
                    "name": "prinplup"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/395/",
                    "name": "empoleon"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/400/",
                    "name": "bibarel"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/418/",
                    "name": "buizel"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/419/",
                    "name": "floatzel"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/422/",
                    "name": "shellos"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/423/",
                    "name": "gastrodon"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/456/",
                    "name": "finneon"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/457/",
                    "name": "lumineon"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/458/",
                    "name": "mantyke"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/484/",
                    "name": "palkia"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/489/",
                    "name": "phione"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/490/",
                    "name": "manaphy"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/501/",
                    "name": "oshawott"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/502/",
                    "name": "dewott"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/503/",
                    "name": "samurott"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/515/",
                    "name": "panpour"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/516/",
                    "name": "simipour"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/535/",
                    "name": "tympole"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/536/",
                    "name": "palpitoad"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/537/",
                    "name": "seismitoad"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/550/",
                    "name": "basculin-red-striped"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/564/",
                    "name": "tirtouga"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/565/",
                    "name": "carracosta"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/580/",
                    "name": "ducklett"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/581/",
                    "name": "swanna"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/592/",
                    "name": "frillish"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/593/",
                    "name": "jellicent"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/594/",
                    "name": "alomomola"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/647/",
                    "name": "keldeo-ordinary"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/656/",
                    "name": "froakie"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/657/",
                    "name": "frogadier"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/658/",
                    "name": "greninja"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/688/",
                    "name": "binacle"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/689/",
                    "name": "barbaracle"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/690/",
                    "name": "skrelp"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/692/",
                    "name": "clauncher"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/693/",
                    "name": "clawitzer"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/721/",
                    "name": "volcanion"
                }
            }, {
                "slot": 2,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10009/",
                    "name": "rotom-wash"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10014/",
                    "name": "castform-rainy"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10016/",
                    "name": "basculin-blue-striped"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10024/",
                    "name": "keldeo-resolute"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10036/",
                    "name": "blastoise-mega"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10041/",
                    "name": "gyarados-mega"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10064/",
                    "name": "swampert-mega"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10070/",
                    "name": "sharpedo-mega"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10071/",
                    "name": "slowbro-mega"
                }
            }, {
                "slot": 1,
                "pokemon": {
                    "url": "http://pokeapi.co/api/v2/pokemon/10077/",
                    "name": "kyogre-primal"
                }
            }],
            "id": 11,
            "names": [{
                "name": "みず",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/1/",
                    "name": "ja"
                }
            }, {
                "name": "물",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/3/",
                    "name": "ko"
                }
            }, {
                "name": "Eau",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/5/",
                    "name": "fr"
                }
            }, {
                "name": "Wasser",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/6/",
                    "name": "de"
                }
            }, {
                "name": "Agua",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/7/",
                    "name": "es"
                }
            }, {
                "name": "Acqua",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/8/",
                    "name": "it"
                }
            }, {
                "name": "Water",
                "language": {
                    "url": "http://pokeapi.co/api/v2/language/9/",
                    "name": "en"
                }
            }]
        }
    }
};

export default mockData;
